import bcrypt from "bcrypt";

const encrypt = async (original) => {
  const salt = await bcrypt.genSalt(10);
  const encryptedPassword = await bcrypt.hash(original, salt);

  return encryptedPassword;
};

export default encrypt;
