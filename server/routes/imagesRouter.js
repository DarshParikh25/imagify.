import express from "express";
import { getImages } from "../controllers/imagesController.js";

const imagesRouter = express.Router();

imagesRouter.get("/get-images", getImages);

export default imagesRouter;
