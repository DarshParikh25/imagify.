"use strict";

import { Model } from "sequelize";

export default (sequelize, DataTypes) => {
  class Refund extends Model {
    static associate(models) {}
  }

  Refund.init(
    {
      payment_id: {
        allowNull: false,
        type: DataTypes.INTEGER,
      },
      amount: {
        allowNull: false,
        type: DataTypes.DECIMAL(10, 2),
        validate: {
          min: 0.01,
        },
      },
      status: {
        allowNull: false,
        defaultValue: "initiated",
        type: DataTypes.ENUM("initiated", "completed", "rejected"),
      },
      initiated_at: {
        allowNull: false,
        defaultValue: DataTypes.NOW,
        type: DataTypes.DATE,
      },
      completed_at: {
        allowNull: true,
        type: DataTypes.DATE,
      },
    },
    {
      sequelize,
      modelName: "Refund",
    }
  );

  return Refund;
};
