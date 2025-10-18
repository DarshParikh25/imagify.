"use strict";

/** @type {import('sequelize-cli').Migration} */

export async function up(queryInterface, Sequelize) {
  await queryInterface.createTable("Images", {
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
    category_id: {
      allowNull: false,
      type: Sequelize.INTEGER,
      references: {
        model: "Categories",
        key: "id",
      },
      onUpdate: "CASCADE",
      onDelete: "CASCADE",
    },
    watermark_id: {
      allowNull: true,
      defaultValue: null,
      type: Sequelize.INTEGER,
      references: {
        model: "Watermarks",
        key: "id",
      },
      onUpdate: "CASCADE",
      onDelete: "CASCADE",
    },
    title: {
      allowNull: false,
      type: Sequelize.STRING,
    },
    description: {
      allowNull: false,
      type: Sequelize.TEXT,
    },
    ai_generated_description: {
      allowNull: false,
      defaultValue: false,
      type: Sequelize.BOOLEAN,
    },
    is_public: {
      allowNull: false,
      type: Sequelize.BOOLEAN,
    },
    status: {
      allowNull: false,
      defaultValue: "pending",
      type: Sequelize.ENUM("pending", "approved", "rejected"),
    },
    url: {
      allowNull: false,
      unique: true,
      type: Sequelize.STRING,
    },
    thumbnail_url: {
      allowNull: false,
      unique: true,
      type: Sequelize.STRING,
    },
    likes: {
      allowNull: false,
      defaultValue: 0,
      type: Sequelize.INTEGER,
    },
    save_count: {
      allowNull: false,
      defaultValue: 0,
      type: Sequelize.INTEGER,
    },
    download: {
      allowNull: false,
      defaultValue: 0,
      type: Sequelize.INTEGER,
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
  await queryInterface.dropTable("Images");
}
