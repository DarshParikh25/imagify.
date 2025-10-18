"use strict";

import { Model } from "sequelize";

export default (sequelize, DataTypes) => {
  class Violation extends Model {
    static associate(models) {}
  }

  Violation.init(
    {
      user_id: {
        allowNull: false,
        type: DataTypes.INTEGER,
      },
      image_id: {
        allowNull: false,
        type: DataTypes.INTEGER,
      },
      severity: {
        allowNull: false,
        type: DataTypes.ENUM("low", "medium", "high"),
      },
      action_taken: {
        allowNull: false,
        type: DataTypes.ENUM("warning", "frozen", "blacklisted"),
      },
      charged_amount: {
        allowNull: true,
        type: DataTypes.DECIMAL(10, 2),
        validate: {
          min: 0.01,
        },
      },
    },
    {
      sequelize,
      modelName: "Violation",
      timestamps: true,
    }
  );

  return Violation;
};
