import { DataTypes, Sequelize } from "sequelize";
import dotenv from "dotenv";

import userModel from "./user.js";
import planModel from "./plan.js";
import subscriptionModel from "./subscription.js";

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
const Subscription = subscriptionModel(sequelize, DataTypes);

User.belongsTo(Plan, { foreignKey: "plan_id", as: "plan" });
User.hasMany(Subscription, { foreignKey: "user_id", as: "subscriptions" });

Plan.hasMany(User, { foreignKey: "plan_id", as: "users" });
Plan.hasMany(Subscription, { foreignKey: "plan_id", as: "plans" });

Subscription.belongsTo(User, { foreignKey: "user_id", as: "user" });
Subscription.belongsTo(Plan, { foreignKey: "plan_id", as: "plan" });

export { sequelize, User, Plan };
