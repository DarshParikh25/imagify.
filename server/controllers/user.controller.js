import { Plan, sequelize, User } from "../models/index.js";
import encrypt from "../utils/encrypt.js";
import createToken from "../utils/createToken.js";
import compare from "../utils/compare.js";

// Sign Up
export const signup = async (req, res) => {
  try {
    const { name, email, password, confirmPassword } = req.body;

    if (!name || !email || !password || !confirmPassword) {
      return res.status(400).json({
        success: false,
        message: "Credentials incomplete. Please check and try again!",
      });
    }

    if (password.length < 8 || password.length > 15) {
      return res.status(400).json({
        success: false,
        message: "Password must be of 8 to 15 characters.",
      });
    }

    if (password !== confirmPassword) {
      return res.status(400).json({
        success: false,
        message: "Passwords do not match. Please check and sign up again!",
      });
    }

    // Check whether the user has already signed up earlier or not(const user)
    const user = await User.findOne({ where: { email } });
    if (user) {
      return res.status(409).json({
        success: false,
        message:
          "This email address is already linked to an account. Please login or use another email address.",
      });
    }

    const encryptedPassword = await encrypt(password);

    const newUserData = {
      name,
      email,
      password: encryptedPassword,
    };

    // Logic to add user data to the PostgreSQL DB
    const newUser = await User.create(newUserData);

    // Logic to create user token using id
    const token = createToken(newUser.id);

    const userDetails = await User.findOne({
      where: { email },
      include: [
        {
          model: Plan,
          as: "plan",
          attributes: [
            "name",
            "type",
            "ai_description",
            "custom_watermark",
            "license_upload",
          ],
        },
      ],
    });

    return res.status(201).json({
      success: true,
      message:
        "Signed up successfully! You’re now ready to explore visuals that inspire your imagination.",
      token,
      user: {
        // details to share to the frontend like name, email, and plan details
        id: userDetails.id,
        name: userDetails.name,
        email: userDetails.email,
        plan: {
          id: userDetails.plan_id,
          name: userDetails.plan.name,
          type: userDetails.plan.type,
          ai_description: userDetails.plan.ai_description,
          custom_watermark: userDetails.plan.custom_watermark,
          license_upload: userDetails.plan.license_upload,
        },
      },
    });
  } catch (error) {
    return res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

// Login
export const login = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    if ((!name, !email, !password)) {
      return res.status(400).json({
        success: false,
        message: "Credentials are incomplete! Please check and try again.",
      });
    }

    // Check for the email in the PostgreSQL DB (const existingUser)
    const existingUser = await User.findOne({
      where: { email },
      include: [
        {
          model: Plan,
          as: "plan",
          attributes: [
            "name",
            "type",
            "ai_description",
            "custom_watermark",
            "license_upload",
          ],
        },
      ],
    });
    if (!existingUser) {
      return res.status(401).json({
        success: false,
        message: "User does not exists! Please sign up first.",
      });
    }

    const isPasswordValid = await compare(password, existingUser.password);
    if (!isPasswordValid) {
      return res.status(401).json({
        success: false,
        message: "Invalid password! Please enter the valid password.",
      });
    }

    // Logic to create the token using id
    const token = createToken(existingUser.id);

    return res.status(200).json({
      success: true,
      message:
        "Access granted! Jump right in and continue your creative journey.",
      token,
      user: {
        // details to share to the frontend like name, email, and plan details
        id: existingUser.id,
        name: existingUser.name,
        email: existingUser.email,
        plan: {
          id: existingUser.plan.id,
          name: existingUser.plan.name,
          type: existingUser.plan.type,
          ai_description: existingUser.plan.ai_description,
          custom_watermark: existingUser.plan.custom_watermark,
          license_upload: existingUser.plan.license_upload,
        },
      },
    });
  } catch (error) {
    return res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};
