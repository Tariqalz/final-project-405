require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const axios = require("axios");

const authRoutes = require("./routes/authRoutes");
const workoutRoutes = require("./routes/workoutRoutes");
const measurementRoutes = require("./routes/measurementRoutes");

const { sequelize } = require("./config/db");

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());

app.use("/api/auth", authRoutes);
app.use("/api/workouts", workoutRoutes);
app.use("/api/measurements", measurementRoutes);

const FATSECRET_API_KEY = process.env.FATSECRET_API_KEY;
const FATSECRET_API_SECRET = process.env.FATSECRET_API_SECRET;

app.post("/api/search", async (req, res) => {
  try {
    const { query, page = 0, maxResults = 10 } = req.body;

    const tokenResponse = await axios.post(
      "https://oauth.fatsecret.com/connect/token",
      new URLSearchParams({
        grant_type: "client_credentials",
        scope: "basic",
      }),
      {
        headers: {
          Authorization: `Basic ${Buffer.from(`${FATSECRET_API_KEY}:${FATSECRET_API_SECRET}`).toString(
            "base64"
          )}`,
          "Content-Type": "application/x-www-form-urlencoded",
        },
      }
    );

    const token = tokenResponse.data.access_token;

    const searchResponse = await axios.get("https://platform.fatsecret.com/rest/foods/search/v1", {
      params: {
        search_expression: query,
        page_number: page,
        max_results: maxResults,
        format: "json",
      },
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    const foods = searchResponse.data.foods.food;
    res.json(foods);
  } catch (error) {
    console.error("Error fetching food data:", error.message);
    res.status(500).json({ error: "Error fetching food data" });
  }
});

(async () => {
  try {
    await sequelize.authenticate();
    console.log("PostgreSQL Connected...");

    await sequelize.sync({ alter: true });
    console.log("Database synced successfully!");
  } catch (err) {
    console.error("Database connection or sync error:", err.message);
  }
})();

app.get("/", (req, res) => {
  res.send("API is running...");
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
