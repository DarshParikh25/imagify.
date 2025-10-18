"use strict";

import { Model } from "sequelize";

export default (sequelize, DataTypes) => {
  class Payment extends Model {
    static associate(models) {}
  }

  Payment.init(
    {
      user_id: {
        allowNull: false,
        type: DataTypes.INTEGER,
      },
      plan_id: {
        allowNull: true,
        type: DataTypes.INTEGER,
      },
      amount: {
        allowNull: false,
        type: DataTypes.DECIMAL(10, 2),
        validate: {
          min: 0.01,
        },
      },
      type: {
        allowNull: false,
        type: DataTypes.ENUM(
          "upload_fee",
          "subscription",
          "license_fee",
          "penalty"
        ),
      },
      status: {
        allowNull: false,
        type: DataTypes.ENUM("success", "failed", "refunded"),
      },
      transaction_id: {
        allowNull: false,
        type: DataTypes.STRING,
      },
    },
    {
      sequelize,
      modelName: "Payment",
      timestamps: true,
      updatedAt: false,
    }
  );

  return Payment;
};
