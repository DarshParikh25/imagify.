"use strict";

/** @type {import('sequelize-cli').Migration} */

export async function up(queryInterface, Sequelize) {
  await queryInterface.createTable("Users", {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER,
    },
    name: {
      allowNull: false,
      type: Sequelize.STRING,
    },
    email: {
      allowNull: false,
      unique: true,
      type: Sequelize.STRING,
    },
    password: {
      allowNull: false,
      type: Sequelize.STRING,
    },
    role: {
      type: Sequelize.ENUM("admin", "user"),
      defaultValue: "user",
    },
    account_status: {
      type: Sequelize.ENUM("active", "frozen", "blacklisted"),
      defaultValue: "active",
    },
    vulnerability_strikes: {
      type: Sequelize.INTEGER,
      defaultValue: 0,
    },
    plan_id: {
      type: Sequelize.INTEGER,
      defaultValue: 1,
      references: {
        model: "Plans",
        key: "id",
      },
      onUpdate: "CASCADE",
      onDelete: "CASCADE",
    },
    createdAt: {
      allowNull: false,
      type: Sequelize.DATE,
      defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"), // To use the current time from DB clock (necessary for raw queries)
    },
    updatedAt: {
      allowNull: false,
      type: Sequelize.DATE,
      defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
    },
  });
}

export async function down(queryInterface, Sequelize) {
  await queryInterface.dropTable("Users");
}
