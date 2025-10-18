"use strict";

/** @type {import('sequelize-cli').Migration} */

export async function up(queryInterface, Sequelize) {
  await queryInterface.createTable("Refunds", {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER,
    },
    payment_id: {
      allowNull: false,
      type: Sequelize.INTEGER,
      references: {
        model: "Payments",
        key: "id",
      },
      onUpdate: "CASCADE",
      onDelete: "CASCADE",
    },
    amount: {
      allowNull: false,
      type: Sequelize.DECIMAL,
    },
    status: {
      allowNull: false,
      defaultValue: "initiated",
      type: Sequelize.ENUM("initiated", "completed", "rejected"),
    },
    initiated_at: {
      allowNull: false,
      defaultValue: Sequelize.NOW, // To use the current time from Node.js app clock
      type: Sequelize.DATE,
    },
    completed_at: {
      allowNull: true,
      type: Sequelize.DATE,
    },
  });
}

export async function down(queryInterface, Sequelize) {
  await queryInterface.dropTable("Refunds");
}
