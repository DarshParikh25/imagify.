import { Category } from "../models/index.js";

export const findOrCreateCategory = async (category, transaction) => {
  const name = category.trim().toLowerCase();
  let existingCategory = await Category.findOne({
    where: { name },
    transaction,
  });
  if (!existingCategory) {
    existingCategory = await Category.create({ name }, { transaction });
  }
};
