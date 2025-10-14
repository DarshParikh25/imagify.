import app from "./app.js";
import { sequelize } from "./models/index.js";

const port = process.env.PORT || 4000;

// Test connection
try {
  await sequelize.authenticate();
  console.log("Connection has been established successfully.");
} catch (error) {
  console.error("Unable to connect to the database:", error);
}

app.listen(port, () => {
  console.log(`Server is running on PORT ${port}`);
});
