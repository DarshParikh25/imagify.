import express from "express";
import cors from "cors";

import imagesRoutes from "./routes/imagesRoutes.js";
import userRoutes from "./routes/userRoutes.js";

const app = express();

app.use(cors());

app.use(express.json());

app.use("/api/user", userRoutes);
app.use("/api/images", imagesRoutes);

app.get("/", (_req, res) => {
  res.send("API Working!");
});

export default app;
