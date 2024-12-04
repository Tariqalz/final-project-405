const { DataTypes } = require("sequelize");
const { sequelize } = require("../config/db");

const Workout = sequelize.define("Workout", {
  name: { type: DataTypes.STRING, allowNull: false },
  exercises: { type: DataTypes.JSON, allowNull: true },
  date: { type: DataTypes.DATE, defaultValue: DataTypes.NOW },
});

module.exports = Workout;
