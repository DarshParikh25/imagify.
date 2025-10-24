import {
  Category,
  Image,
  ImageTag,
  sequelize,
  Tag,
  User,
} from "../models/index.js";
import { findOrCreateTags } from "../helpers/tag.helper.js";
import cloudinary from "../utils/cloudinary.js";
import { findOrCreateCategory } from "../helpers/category.helper.js";
import { checkUserStatus } from "../helpers/status.helper.js";

// Upload image
export const uploadImage = async (req, res) => {
  // Start transaction
  const transaction = await sequelize.transaction();

  try {
    const {
      watermark_id,
      title,
      description,
      category,
      tags,
      is_public,
      ai_generated_description,
      imageBase64,
    } = req.body;
    const { user_id } = req;

    // Check for empty fields in the request
    if (
      !user_id ||
      !title?.trim() ||
      !description?.trim() ||
      !category?.trim() ||
      !Array.isArray(tags) ||
      tags.length === 0 ||
      !imageBase64
    ) {
      return res.status(400).json({
        success: false,
        message: "All fields are required!",
      });
    }

    // Check for user
    const status = await checkUserStatus(user_id, transaction);

    // Check user for vulnerabilities and account status
    if (status === "blacklisted") {
      return res.status(403).json({
        success: false,
        message:
          "Your account is blacklisted! Check registered email for further information.",
      });
    }
    if (status === "frozen") {
      return res.status(403).json({
        success: false,
        message:
          "Your account is frozen! Check registered email for further information.",
      });
    }

    // Check for category existence, if not then create one
    const existingCategory = await findOrCreateCategory(category, transaction);

    // Upload image to Cloudinary
    let uploadResponse;
    try {
      uploadResponse = await cloudinary.uploader.upload(imageBase64, {
        folder: "uploads/images/imagify/",
        resource_type: "image",
      });
    } catch (cloudErr) {
      console.error("Cloudinary error:", cloudErr);
      return res
        .status(400)
        .json({ success: false, message: "Cloudinary upload failed" });
    }

    // updated image information
    const imageInfo = {
      user_id,
      category_id: existingCategory.id,
      watermark_id,
      public_id: uploadResponse.public_id,
      title,
      description,
      ai_generated_description,
      is_public,
      url: uploadResponse.secure_url,
      thumbnail_url: uploadResponse.secure_url,
    };

    // Store image details in DB
    const newImage = await Image.create(imageInfo, { transaction });

    // Check tags existence, if not then create them
    await findOrCreateTags(tags, newImage.id, transaction);

    // Commit the changes if everything is fine
    await transaction.commit();

    return res.status(200).json({
      success: true,
      message:
        "Your image upload request is submitted. It will take few hours to process the image and it's details. You'll be notified to the registered email about the image upload status. Please be patient!",
    });
  } catch (error) {
    // Rollback the changes if any step fails
    await transaction.rollback();

    res.status(500).json({
      success: false,
      error: error.message,
    });
  }
};

export const getImages = async (_req, res) => {
  try {
    // const { next_cursor } = req.query;

    // const images = await cloudinary.api.resources({
    //   resource_type: "image",
    //   type: "upload",
    //   max_results: 5,
    //   ...(next_cursor && { next_cursor }),
    // });

    // return res.status(200).json({
    //   success: true,
    //   count: images.resources.length,
    //   images: images.resources.map((img) => ({
    //     public_id: img.public_id,
    //     url: img.secure_url,
    //     folder: img.asset_folder,
    //     created_at: img.created_at,
    //   })),
    //   next_cursor: images.next_cursor,
    // });

    const images = await Image.findAll({
      include: [
        {
          model: User,
          as: "user",
          attributes: ["name", "email"],
        },
        {
          model: Tag,
          through: ImageTag,
          as: "tags",
          attributes: ["name"],
        },
        {
          model: Category,
          as: "category",
          attributes: ["name"],
        },
      ],
      // attributes: [
      //   "id",
      //   "title",
      //   "description",
      //   "is_public",
      //   "url",
      //   "thumbnail_url",
      //   "likes",
      //   "save_count",
      //   "download",
      //   "createdAt",
      // ],
      attributes: {
        exclude: [
          "category_id",
          "watermark_id",
          "public_id",
          "ai_generated_description",
          "status",
          "updatedAt",
        ],
      },
    });

    return res.status(200).json({
      success: true,
      images,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
