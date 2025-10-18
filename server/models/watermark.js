"use strict";

import { Model } from "sequelize";

export default (sequelize, DataTypes) => {
  class Watermark extends Model {
    static associate(models) {}
  }

  Watermark.init(
    {
      user_id: {
        allowNull: false,
        type: DataTypes.INTEGER,
      },
      type: {
        allowNull: false,
        defaultValue: "hidden",
        type: DataTypes.ENUM("hidden", "custom"),
      },
      watermark_url: {
        allowNull: false,
        type: DataTypes.STRING,
        validate: {
          isUrl: true,
        },
      },
    },
    {
      sequelize,
      modelName: "Watermark",
      timestamps: true,
      updatedAt: false,
    }
  );

  return Watermark;
};
