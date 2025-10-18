"use strict";

import { Model } from "sequelize";

export default (sequelize, DataTypes) => {
  class ImageTag extends Model {
    static associate(models) {}
  }
  ImageTag.init(
    {
      image_id: {
        allowNull: false,
        type: DataTypes.INTEGER,
      },
      tag_id: {
        allowNull: false,
        type: DataTypes.INTEGER,
      },
    },
    {
      sequelize,
      modelName: "ImageTag",
      timestamps: true,
    }
  );

  return ImageTag;
};
