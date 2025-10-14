import axios from "axios";

const CLOUD_NAME = process.env.CLOUDINARY_CLOUD_NAME;
const API_KEY = process.env.CLOUDINARY_API_KEY;
const SECRET_KEY = process.env.CLOUDINARY_SECRET_KEY;

export const getImages = async (_req, res) => {
  try {
    const response = await axios.get(
      `https://api.cloudinary.com/v1_1/${CLOUD_NAME}/resources/image`,
      {
        auth: {
          username: API_KEY,
          password: SECRET_KEY,
        },
      }
    );

    console.log(response);

    const urls = response.data.resources.map((img) => img.secure_url);
    console.log(urls);

    res.json(urls);
  } catch (error) {
    res.status(500).json({
      error: error.message,
    });
  }
};
