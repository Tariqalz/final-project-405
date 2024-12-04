const Workout = require("../models/Workout");

const getWorkouts = async (req, res) => {
  try {
    const workouts = await Workout.findAll({ where: { UserId: req.user.id } });
    res.status(200).json(workouts);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch workouts" });
  }
};

const addWorkout = async (req, res) => {
  try {
    const { name, exercises } = req.body;
    const workout = await Workout.create({ name, exercises, UserId: req.user.id });
    res.status(201).json(workout);
  } catch (err) {
    res.status(400).json({ error: "Failed to create workout" });
  }
};

const updateWorkout = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, exercises } = req.body;

    const workout = await Workout.findByPk(id);
    if (!workout) return res.status(404).json({ error: "Workout not found" });

    await workout.update({ name, exercises });
    res.status(200).json(workout);
  } catch (err) {
    res.status(400).json({ error: "Failed to update workout" });
  }
};

const deleteWorkout = async (req, res) => {
  try {
    const { id } = req.params;

    const workout = await Workout.findByPk(id);
    if (!workout) return res.status(404).json({ error: "Workout not found" });

    await workout.destroy();
    res.status(204).send();
  } catch (err) {
    res.status(500).json({ error: "Failed to delete workout" });
  }
};

module.exports = { getWorkouts, addWorkout, updateWorkout, deleteWorkout };
