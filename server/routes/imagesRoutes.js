import express from "express";
import { getImages } from "../controllers/imagesController.js";

const imagesRoutes = express.Router();

imagesRoutes.post("/get-images", getImages);

export default imagesRoutes;
