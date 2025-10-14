"use strict";

import { Model } from "sequelize";

export default (sequelize, DataTypes) => {
  class Plan extends Model {
    static associate(models) {}
  }
  Plan.init(
    {
      name: {
        type: DataTypes.ENUM("Free", "Launch", "Voyage", "Odyssey"),
        allowNull: false,
        unique: true,
      },
      type: {
        allowNull: false,
        type: DataTypes.ENUM("free", "one_time", "monthly", "yearly"),
      },
      price: {
        allowNull: false,
        type: DataTypes.DECIMAL(10, 2),
      },
      ai_description: {
        allowNull: false,
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },
      custom_watermark: {
        allowNull: false,
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },
      license_upload: {
        allowNull: false,
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },
    },
    {
      sequelize,
      modelName: "Plan",
    }
  );
  return Plan;
};
