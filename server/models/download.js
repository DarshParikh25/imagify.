"use strict";

import { Model } from "sequelize";

export default (sequelize, DataTypes) => {
  class Download extends Model {
    static associate(models) {}
  }

  Download.init(
    {
      user_id: {
        allowNull: false,
        type: DataTypes.INTEGER,
      },
      image_id: {
        allowNull: false,
        type: DataTypes.INTEGER,
      },
      is_with_watermark: {
        allowNull: false,
        defaultValue: true,
        type: DataTypes.BOOLEAN,
      },
    },
    {
      sequelize,
      modelName: "Download",
      timestamps: true,
      updatedAt: false,
    }
  );

  return Download;
};
