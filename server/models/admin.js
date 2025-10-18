"use strict";

import { Model } from "sequelize";

export default (sequelize, DataTypes) => {
  class Admin extends Model {
    static associate(models) {}
  }

  Admin.init(
    {
      name: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      email: {
        allowNull: false,
        unique: true,
        type: DataTypes.STRING,
        validate: {
          isEmail: true,
        },
      },
      password: {
        allowNull: false,
        type: DataTypes.STRING,
      },
    },
    {
      sequelize,
      modelName: "Admin",
      timestamps: true,
      updatedAt: false,
    }
  );

  return Admin;
};
