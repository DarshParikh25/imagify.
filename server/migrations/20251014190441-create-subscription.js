"use strict";
/** @type {import('sequelize-cli').Migration} */

export async function up(queryInterface, Sequelize) {
  await queryInterface.createTable("Subscriptions", {
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
      allowNull: false,
      type: Sequelize.INTEGER,
      references: {
        model: "Plans",
        key: "id",
      },
      onUpdate: "CASCADE",
      onDelete: "CASCADE",
    },
    start_date: {
      allowNull: false,
      type: Sequelize.DATEONLY,
    },
    end_date: {
      allowNull: false,
      type: Sequelize.DATEONLY,
    },
    is_active: {
      defaultValue: true,
      type: Sequelize.BOOLEAN,
      allowNull: false,
    },
    auto_renew: {
      defaultValue: true,
      type: Sequelize.BOOLEAN,
      allowNull: false,
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
  await queryInterface.dropTable("Subscriptions");
}
