"use strict";

import { Model } from "sequelize";

export default (sequelize, DataTypes) => {
  class License extends Model {
    static associate(models) {}
  }

  License.init(
    {
      image_id: {
        allowNull: false,
        type: DataTypes.INTEGER,
      },
      user_id: {
        allowNull: false,
        type: DataTypes.INTEGER,
      },
      license_url: {
        allowNull: false,
        unique: true,
        type: DataTypes.STRING,
        validate: {
          isUrl: true,
        },
      },
      status: {
        allowNull: false,
        defaultValue: "pending",
        type: DataTypes.ENUM("pending", "approved", "rejected"),
      },
      reviewer_id: {
        allowNull: false,
        type: DataTypes.INTEGER,
      },
    },
    {
      sequelize,
      modelName: "License",
      timestamps: true,
    }
  );

  return License;
};
