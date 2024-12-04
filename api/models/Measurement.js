const { DataTypes } = require("sequelize");
const { sequelize } = require("../config/db");


const Measurement = sequelize.define("Measurement", {
  weight: {
    type: DataTypes.FLOAT,
  },
  bodyFatPercentage: {
    type: DataTypes.FLOAT,
  },
  bmi: {
    type: DataTypes.FLOAT,
  },
  measurements: {
    type: DataTypes.JSON,
    allowNull: true,
  },
  date: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
  },
});

module.exports = Measurement;
