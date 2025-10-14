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
        defaultValue: "user",
        type: DataTypes.ENUM("admin", "user"),
      },
      account_status: {
        type: DataTypes.ENUM("active", "frozen", "blacklisted"),
        defaultValue: "active",
      },
      vulnerability_strikes: {
        type: DataTypes.INTEGER,
        defaultValue: 0,
      },
      plan_id: {
        type: DataTypes.INTEGER,
        defaultValue: 1,
      },
    },
    {
      sequelize,
      modelName: "User",
    }
  );
  return User;
};
