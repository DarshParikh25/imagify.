import { DataTypes, Sequelize } from "sequelize";
import dotenv from "dotenv";

import userModel from "./user.js";
import planModel from "./plan.js";

dotenv.config();

const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    dialect: process.env.DB_DIALECT,
    logging: false, // Disable SQL query logs for cleaner console
  }
);

const User = userModel(sequelize, DataTypes);
const Plan = planModel(sequelize, DataTypes);

User.belongsTo(Plan, { foreignKey: "plan_id", as: "plan" });

Plan.hasMany(User, { foreignKey: "plan_id", as: "users" });

export { sequelize, User, Plan };
