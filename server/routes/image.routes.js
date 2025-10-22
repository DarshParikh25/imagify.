import express from "express";
import { uploadImage } from "../controllers/image.controller.js";
import { authMiddleware } from "../middlewares/auth.middleware.js";

const imagesRoutes = express.Router();

imagesRoutes.post("/upload", authMiddleware, uploadImage);

export default imagesRoutes;
