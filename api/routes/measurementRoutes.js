const express = require("express");
const { getMeasurements, addMeasurement, updateMeasurement, deleteMeasurement } = require("../controllers/measurementController");
const authMiddleware = require("../middleware/authMiddleware");

const router = express.Router();

router.get("/", authMiddleware, getMeasurements);
router.post("/", authMiddleware, addMeasurement);
router.put("/:id", authMiddleware, updateMeasurement);
router.delete("/:id", authMiddleware, deleteMeasurement);

module.exports = router;
