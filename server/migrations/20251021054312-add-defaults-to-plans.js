"use strict";

/** @type {import('sequelize-cli').Migration} */

export async function up(queryInterface, Sequelize) {
  await queryInterface.changeColumn("Plans", "ai_description", {
    type: Sequelize.BOOLEAN,
    allowNull: false,
    defaultValue: false,
  });

  await queryInterface.changeColumn("Plans", "custom_watermark", {
    type: Sequelize.BOOLEAN,
    allowNull: false,
    defaultValue: false,
  });

  await queryInterface.changeColumn("Plans", "license_upload", {
    type: Sequelize.BOOLEAN,
    allowNull: false,
    defaultValue: false,
  });
}

export async function down(queryInterface, Sequelize) {
  await queryInterface.changeColumn("Plans", "ai_description", {
    type: Sequelize.BOOLEAN,
    allowNull: false,
  });

  await queryInterface.changeColumn("Plans", "custom_watermark", {
    type: Sequelize.BOOLEAN,
    allowNull: false,
  });

  await queryInterface.changeColumn("Plans", "license_upload", {
    type: Sequelize.BOOLEAN,
    allowNull: false,
  });
}
