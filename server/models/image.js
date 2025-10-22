"use strict";

import { Model } from "sequelize";

export default (sequelize, DataTypes) => {
  class Image extends Model {
    static associate(models) {}
  }

  Image.init(
    {
      user_id: {
        allowNull: false,
        type: DataTypes.INTEGER,
      },
      category_id: {
        allowNull: false,
        type: DataTypes.INTEGER,
      },
      watermark_id: {
        allowNull: true,
        defaultValue: null,
        type: DataTypes.INTEGER,
      },
      public_id: {
        allowNull: false,
        unique: true,
        type: DataTypes.STRING,
      },
      title: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      description: {
        allowNull: false,
        type: DataTypes.TEXT,
      },
      ai_generated_description: {
        allowNull: false,
        defaultValue: false,
        type: DataTypes.BOOLEAN,
      },
      is_public: {
        allowNull: false,
        type: DataTypes.BOOLEAN,
      },
      status: {
        allowNull: false,
        defaultValue: "pending",
        type: DataTypes.ENUM("pending", "approved", "rejected"),
      },
      url: {
        allowNull: false,
        unique: true,
        type: DataTypes.STRING,
      },
      thumbnail_url: {
        allowNull: false,
        unique: true,
        type: DataTypes.STRING,
      },
      likes: {
        allowNull: false,
        defaultValue: 0,
        type: DataTypes.INTEGER,
      },
      save_count: {
        allowNull: false,
        defaultValue: 0,
        type: DataTypes.INTEGER,
      },
      download: {
        allowNull: false,
        defaultValue: 0,
        type: DataTypes.INTEGER,
      },
    },
    {
      sequelize,
      modelName: "Image",
      timestamps: true,
    }
  );

  return Image;
};
