"use strict";

import { Model } from "sequelize";

export default (sequelize, DataTypes) => {
  class Like extends Model {
    static associate(models) {}
  }

  Like.init(
    {
      user_id: {
        allowNull: false,
        type: DataTypes.INTEGER,
      },
      image_id: {
        allowNull: false,
        type: DataTypes.INTEGER,
      },
    },
    {
      sequelize,
      modelName: "Like",
      timestamps: true,
      updatedAt: false,
    }
  );

  return Like;
};
