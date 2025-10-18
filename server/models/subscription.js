"use strict";

import { Model } from "sequelize";

export default (sequelize, DataTypes) => {
  class Subscription extends Model {
    static associate(models) {}
  }
  Subscription.init(
    {
      user_id: {
        allowNull: false,
        type: DataTypes.INTEGER,
      },
      plan_id: {
        allowNull: false,
        type: DataTypes.INTEGER,
      },
      start_date: {
        allowNull: false,
        type: DataTypes.DATEONLY,
      },
      end_date: {
        allowNull: false,
        type: DataTypes.DATEONLY,
      },
      is_active: {
        allowNull: false,
        defaultValue: true,
        type: DataTypes.BOOLEAN,
      },
      auto_renew: {
        allowNull: false,
        defaultValue: true,
        type: DataTypes.BOOLEAN,
      },
    },
    {
      sequelize,
      modelName: "Subscription",
      timestamps: true,
    }
  );

  return Subscription;
};
