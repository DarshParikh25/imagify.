"use strict";

/** @type {import('sequelize-cli').Migration} */

export async function up(queryInterface, Sequelize) {
  await queryInterface.createTable("Licenses", {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER,
    },
    image_id: {
      allowNull: false,
      type: Sequelize.INTEGER,
      references: {
        model: "Images",
        key: "id",
      },
      onDelete: "CASCADE",
      onUpdate: "CASCADE",
    },
    user_id: {
      allowNull: false,
      type: Sequelize.INTEGER,
      references: {
        model: "Users",
        key: "id",
      },
      onDelete: "CASCADE",
      onUpdate: "CASCADE",
    },
    license_url: {
      allowNull: false,
      unique: true,
      type: Sequelize.STRING,
    },
    status: {
      defaultValue: "pending",
      type: Sequelize.ENUM("pending", "approved", "rejected"),
    },
    reviewer_id: {
      allowNull: false,
      type: Sequelize.INTEGER,
      references: {
        model: "Admins",
        key: "id",
      },
      onDelete: "CASCADE",
      onUpdate: "CASCADE",
    },
    createdAt: {
      allowNull: false,
      type: Sequelize.DATE,
    },
    updatedAt: {
      allowNull: false,
      type: Sequelize.DATE,
    },
  });
}

export async function down(queryInterface, Sequelize) {
  await queryInterface.dropTable("Licenses");
}
