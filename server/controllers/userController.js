import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

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
    const user = await User.findOne({ where: email });
    if (user) {
      return res.status(409).json({
        success: false,
        message:
          "This email address is already linked to an account. Please login or use another email address.",
      });
    }

    const salt = await bcrypt.genSalt(10);
    const encryptedPassword = await bcrypt.hash(password, salt);

    const month = new Date().toLocaleString("default", { month: "short" });
    const year = new Date().getFullYear();

    const newUserData = {
      name,
      email,
      password: encryptedPassword,
      joinedAt: `${month} ${year}`,
    };

    console.log(newUserData.joinedAt);

    // Logic to add user data to the PostgreSQL DB
    const newUser = await User.create(newUserData);

    // Logic to create user token using id
    const token = jwt.sign({ id: newUser.id }, process.env.JWT_SECRET, {
      expiresIn: process.env.JWT_EXPIRES_IN || "1d",
    });

    return res.status(201).json({
      success: true,
      message:
        "Signed up successfully! You’re now ready to explore visuals that inspire your imagination.",
      token,
      user: {
        // details to share to the frontend like name, email, joining month
        id: newUser.id,
        name: newUser.name,
        email: newUser.email,
        joinedAt: newUser.joinedAt,
      },
    });
  } catch (error) {
    console.log(error.message);
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
    const existingUser = await User.findOne({ where: email });
    if (!existingUser) {
      return res.status(401).json({
        success: false,
        message: "User does not exists! Please sign up first.",
      });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(401).json({
        success: false,
        message: "Invalid password! Please enter the valid password.",
      });
    }

    // Logic to create the token using id
    const token = jwt.sign({ id: existingUser.id }, process.env.JWT_SECRET, {
      expiresIn: process.env.JWT_EXPIRES_IN,
    });

    return res.status(200).json({
      success: true,
      message:
        "Access granted! Jump right in and continue your creative journey.",
      token,
      user: {
        // details to share to the frontend like name, email, joining month
        id: existingUser.id,
        name: existingUser.name,
        email: existingUser.email,
        joinedAt: existingUser.joinedAt,
      },
    });
  } catch (error) {
    console.log(error.message);
    return res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};
