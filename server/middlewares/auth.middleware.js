import jwt from "jsonwebtoken";

import { User } from "../models/index.js";

export const authMiddleware = async (req, res, next) => {
  try {
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return res.status(401).json({
        success: false,
        message: "Authorization token missing or invalid format.",
      });
    }

    const token = authHeader.split(" ")[1];
    const decodedToken = jwt.verify(token, process.env.JWT_SECRET);

    const user = await User.findByPk(decodedToken.id);
    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found! Please sign up.",
      });
    }

    req.user_id = user.id;

    next();
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};
