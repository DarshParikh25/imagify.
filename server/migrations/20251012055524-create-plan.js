"use strict";

/** @type {import('sequelize-cli').Migration} */

export async function up(queryInterface, Sequelize) {
  await queryInterface.createTable("Plans", {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER,
    },
    name: {
      allowNull: false,
      unique: true,
      type: Sequelize.ENUM("Free", "Launch", "Voyage", "Odyssey"),
    },
    type: {
      allowNull: false,
      type: Sequelize.ENUM("free", "one_time", "monthly", "yearly"),
    },
    price: {
      allowNull: false,
      type: Sequelize.DECIMAL(10, 2),
    },
    ai_description: {
      allowNull: false,
      type: Sequelize.BOOLEAN,
      defaultValue: false,
    },
    custom_watermark: {
      allowNull: false,
      type: Sequelize.BOOLEAN,
      defaultValue: false,
    },
    license_upload: {
      allowNull: false,
      type: Sequelize.BOOLEAN,
      defaultValue: false,
    },
    createdAt: {
      allowNull: false,
      type: Sequelize.DATE,
      defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
    },
    updatedAt: {
      allowNull: false,
      type: Sequelize.DATE,
      defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
    },
  });
}

export async function down(queryInterface, Sequelize) {
  await queryInterface.dropTable("Plans");
}
