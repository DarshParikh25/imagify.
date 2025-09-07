import express from "express";
import cors from "cors";
import imagesRoutes from "./routes/imagesRoutes.js";
import userRoutes from "./routes/userRoutes.js";

const app = express();
const port = process.env.PORT || 4000;

app.use(cors());

app.use(express.json());

app.use("/api/user", userRoutes);
app.use("/api/images", imagesRoutes);

app.get("/", (req, res) => {
  res.send("API Working!");
});

app.listen(port, () => {
  console.log(`Server is running on PORT ${port}`);
});
