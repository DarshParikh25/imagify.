import express from "express";
import cors from "cors";
import imagesRouter from "routes/imagesRouter.js";

const app = express();
const port = process.env.PORT || 4000;

app.use(cors());

app.get("/api/images", imagesRouter);

app.listen(port, () => {
  console.log(`Server is running on PORT ${port}`);
});
