const { sequelize, connectDB } = require("../config/db");
const User = require("./User");
const Workout = require("./Workout");
const Measurement = require("./Measurement");

User.hasMany(Workout, { onDelete: "CASCADE" });
Workout.belongsTo(User);

User.hasMany(Measurement, { onDelete: "CASCADE" });
Measurement.belongsTo(User);

const syncDB = async () => {
  try {
    await sequelize.sync({ force: false });
    console.log("Database synced!");
  } catch (error) {
    console.error("Error syncing database:", error.message);
  }
};

module.exports = { sequelize, connectDB, syncDB, User, Workout, Measurement };
