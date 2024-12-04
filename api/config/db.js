const { Sequelize } = require("sequelize");
require("dotenv").config();

const sequelize = new Sequelize(
    process.env.DB_NAME, 
    process.env.DB_USER, 
    process.env.DB_PASSWORD, 
    {
      host: process.env.DB_HOST,
      dialect: "postgres",
      dialectOptions: {
        ssl: false,
      },
      logging: false,
    }
  );
  

const connectDB = async () => {
  try {
    await sequelize.authenticate();
    console.log("PostgreSQL Connected...");
  } catch (error) {
    console.error("Unable to connect to the database:", error.message);
    process.exit(1);
  }
};

module.exports = { sequelize, connectDB };
