import { User } from "../models/index.js";

export const checkUserStatus = async (user_id, transaction) => {
  const user = await User.findByPk(user_id, { transaction });
  if (!user) {
    return res.status(404).json({
      success: false,
      message: "User does not exists! Please sign up.",
    });
  }

  if (
    user.account_status === "blacklisted" &&
    user.vulnerability_strikes === 5
  ) {
    return "blacklisted";
  }
  if (user.account_status === "frozen" && user.vulnerability_strikes === 3) {
    return "frozen";
  }
};
