import express from "express";
import { getImages, uploadImage } from "../controllers/image.controller.js";
import { authMiddleware } from "../middlewares/auth.middleware.js";

const imagesRoutes = express.Router();

imagesRoutes.post("/upload", authMiddleware, uploadImage);
imagesRoutes.get("/", getImages);

export default imagesRoutes;
