const express = require("express");
const cors = require("cors");
const app = express();

// Enable CORS - allows frontend to connect to this API
app.use(cors());

// Allow API to read JSON data from requests
app.use(express.json());

// Import all routes
const authRouter = require('./routes/auth');
const usersRouter = require('./routes/users');
const exercisesRouter = require('./routes/exercises');
const workoutsRouter = require('./routes/workouts');
const goalsRouter = require('./routes/goals');

// Use routes
app.use('/auth', authRouter);
app.use('/users', usersRouter);
app.use('/exercises', exercisesRouter);
app.use('/workouts', workoutsRouter);
app.use('/goals', goalsRouter);

// Simple test route
app.get('/', (req, res) => {
  res.json({ message: "Welcome to IronLog API!" });
});

// Start server on port 3000
app.listen(3000, () => {
  console.log("🏋️ IronLog API running on http://localhost:3000");
});