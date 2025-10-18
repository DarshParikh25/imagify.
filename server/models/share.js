"use strict";

import { Model } from "sequelize";

export default (sequelize, DataTypes) => {
  class Share extends Model {
    static associate(models) {}
  }

  Share.init(
    {
      user_id: {
        allowNull: false,
        type: DataTypes.INTEGER,
      },
      image_id: {
        allowNull: false,
        type: DataTypes.INTEGER,
      },
      shared_to_platform: {
        allowNull: false,
        type: DataTypes.STRING,
      },
    },
    {
      sequelize,
      modelName: "Share",
      timestamps: true,
      updatedAt: false,
    }
  );

  return Share;
};
