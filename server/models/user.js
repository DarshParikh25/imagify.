"use strict";

import { Model } from "sequelize";

export default (sequelize, DataTypes) => {
  class User extends Model {
    static associate(models) {}
  }
  User.init(
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
      role: {
        allowNull: false,
        defaultValue: "user",
        type: DataTypes.ENUM("admin", "user"),
      },
      account_status: {
        allowNull: false,
        type: DataTypes.ENUM("active", "frozen", "blacklisted"),
        defaultValue: "active",
      },
      vulnerability_strikes: {
        allowNull: false,
        type: DataTypes.INTEGER,
        defaultValue: 0,
      },
      plan_id: {
        allowNull: false,
        type: DataTypes.INTEGER,
        defaultValue: 1,
      },
    },
    {
      sequelize,
      modelName: "User",
      timestamps: true,
    }
  );
  return User;
};
