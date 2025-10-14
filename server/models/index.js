import { DataTypes, Sequelize } from "sequelize";
import dotenv from "dotenv";

import userModel from "./user.js";
import planModel from "./plan.js";
import subscriptionModel from "./subscription.js";
import imageModel from "./image.js";
import categoryModel from "./category.js";

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
const Image = imageModel(sequelize, DataTypes);
const Category = categoryModel(sequelize, DataTypes);

User.belongsTo(Plan, { foreignKey: "plan_id", as: "plan" });
Plan.hasMany(User, { foreignKey: "plan_id", as: "users" });

User.hasMany(Subscription, { foreignKey: "user_id", as: "subscriptions" });
Subscription.belongsTo(User, { foreignKey: "user_id", as: "user" });

User.belongsToMany(Plan, {
  through: Subscription,
  foreignKey: "user_id",
  otherKey: "plan_id",
  as: "subscribed_plans",
});
Plan.belongsToMany(User, {
  through: Subscription,
  foreignKey: "plan_id",
  otherKey: "user_id",
  as: "subscribers",
});

User.hasMany(Image, { foreignKey: "user_id", as: "images" });
Image.belongsTo(User, { foreignKey: "user_id", as: "user" });

Plan.hasMany(Subscription, { foreignKey: "plan_id", as: "subscriptions" });
Subscription.belongsTo(Plan, { foreignKey: "plan_id", as: "plan" });

Image.belongsTo(Category, { foreignKey: "category_id", as: "category" });
Category.hasMany(Image, { foreignKey: "category_id", as: "images" });

export { sequelize, User, Plan, Subscription, Image };
