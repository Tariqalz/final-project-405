const Measurement = require("../models/Measurement");

const getMeasurements = async (req, res) => {
  try {
    const measurements = await Measurement.findAll({ where: { UserId: req.user.id } });
    res.status(200).json(measurements);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch measurements" });
  }
};

const addMeasurement = async (req, res) => {
  try {
    const { date, weight, bodyFat } = req.body;
    const measurement = await Measurement.create({ date, weight, bodyFat, UserId: req.user.id });
    res.status(201).json(measurement);
  } catch (err) {
    res.status(400).json({ error: "Failed to create measurement" });
  }
};

const updateMeasurement = async (req, res) => {
  try {
    const { id } = req.params;
    const { date, weight, bodyFat } = req.body;

    const measurement = await Measurement.findByPk(id);
    if (!measurement) return res.status(404).json({ error: "Measurement not found" });

    await measurement.update({ date, weight, bodyFat });
    res.status(200).json(measurement);
  } catch (err) {
    res.status(400).json({ error: "Failed to update measurement" });
  }
};

const deleteMeasurement = async (req, res) => {
  try {
    const { id } = req.params;

    const measurement = await Measurement.findByPk(id);
    if (!measurement) return res.status(404).json({ error: "Measurement not found" });

    await measurement.destroy();
    res.status(204).send();
  } catch (err) {
    res.status(500).json({ error: "Failed to delete measurement" });
  }
};

module.exports = { getMeasurements, addMeasurement, updateMeasurement, deleteMeasurement };
