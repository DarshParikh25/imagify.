"use strict";

/** @type {import('sequelize-cli').Migration} */

export async function up(queryInterface, Sequelize) {
  await queryInterface.createTable("Payments", {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER,
    },
    user_id: {
      allowNull: false,
      type: Sequelize.INTEGER,
      references: {
        model: "Users",
        key: "id",
      },
      onUpdate: "CASCADE",
      onDelete: "CASCADE",
    },
    plan_id: {
      allowNull: true,
      type: Sequelize.INTEGER,
      references: {
        model: "Plans",
        key: "id",
      },
      onUpdate: "CASCADE",
      onDelete: "CASCADE",
    },
    amount: {
      allowNull: false,
      type: Sequelize.DECIMAL(10, 2),
    },
    type: {
      allowNull: false,
      type: Sequelize.ENUM(
        "upload_fee",
        "subscription",
        "license_fee",
        "penalty"
      ),
    },
    status: {
      allowNull: false,
      type: Sequelize.ENUM("success", "failed", "refunded"),
    },
    transaction_id: {
      allowNull: false,
      type: Sequelize.STRING,
    },
    createdAt: {
      allowNull: false,
      type: Sequelize.DATE,
    },
  });
}

export async function down(queryInterface, Sequelize) {
  await queryInterface.dropTable("Payments");
}
