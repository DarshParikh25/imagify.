import bcrypt from "bcrypt";

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

    if (password !== confirmPassword) {
      return res.status(400).json({
        success: false,
        message: "Passwords do not match. Please check and sign up again!",
      });
    }

    // Check whether the user has already signed up earlier or not(const user)

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

    // Logic to create user token using id

    return res.status(201).json({
      success: true,
      message:
        "Signed up successfully! 🎉 You’re now ready to explore visuals that inspire your imagination.",
      // token,
      user: {
        // details to share to the frontend like name, email, joining month
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

    // Check for the email in the PostgreSQL DB (const user)

    if (!user) {
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

    return res.status(200).json({
      success: true,
      message:
        "Access granted! 🎉 Jump right in and continue your creative journey.",
      user: {
        // details to share to the frontend like name, email, joining month
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
