import express from "express";
import {
  getImages,
  getImagesByUser,
  uploadImage,
} from "../controllers/image.controller.js";
import { authMiddleware } from "../middlewares/auth.middleware.js";

const imagesRoutes = express.Router();

imagesRoutes.post("/upload", authMiddleware, uploadImage);
imagesRoutes.get("/", getImages);
imagesRoutes.get("/:id/:is_public?/:status?", authMiddleware, getImagesByUser);

export default imagesRoutes;
