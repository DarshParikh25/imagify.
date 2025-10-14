"use strict";

import { Model } from "sequelize";

export default (sequelize, DataTypes) => {
  class Tag extends Model {
    static associate(models) {}
  }
  Tag.init(
    {
      name: {
        allowNull: false,
        unique: true,
        type: DataTypes.STRING,
      },
    },
    {
      sequelize,
      modelName: "Tag",
    }
  );

  return Tag;
};
