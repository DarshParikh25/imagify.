"use strict";

/** @type {import('sequelize-cli').Migration} */

export async function up(queryInterface, Sequelize) {
  await queryInterface.sequelize.query(
    'ALTER SEQUENCE "Plans_id_seq" RESTART WITH 1;'
  );

  await queryInterface.bulkInsert("Plans", [
    {
      name: "Free",
      type: "free",
      price: 0.0,
      ai_description: false,
      custom_watermark: false,
      license_upload: false,
    },
    {
      name: "Launch",
      type: "one_time",
      price: 24.99,
      ai_description: true,
      custom_watermark: false,
      license_upload: false,
    },
    {
      name: "Voyage",
      type: "monthly",
      price: 99.99,
      ai_description: true,
      custom_watermark: true,
      license_upload: true,
    },
    {
      name: "Odyssey",
      type: "yearly",
      price: 999.99,
      ai_description: true,
      custom_watermark: true,
      license_upload: true,
    },
  ]);
}

export async function down(queryInterface, Sequelize) {
  await queryInterface.bulkDelete("Plans", null, {});
}
