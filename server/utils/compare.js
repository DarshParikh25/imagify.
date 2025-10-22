import bcrypt from "bcrypt";

const compare = async (encrypted, original) => {
  const isValid = await bcrypt.compare(encrypted, original);

  return isValid;
};

export default compare;
