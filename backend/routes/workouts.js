const express = require('express');
const router = express.Router();

const { PrismaClient } = require('../generated/prisma');
const prisma = new PrismaClient();

// ============================================
// GET all workouts for a user
// GET /workouts/:userId
// ============================================
router.get('/user/:userId', async (req, res) => {
  try {
    const workouts = await prisma.workouts.findMany({
      where: { user_id: parseInt(req.params.userId) },
      include: {
        exercise: true  // Include exercise details
      },
      orderBy: { date: 'desc' }  // Newest first
    });

    res.json(workouts);
  } catch (error) {
    res.status(500).json({ error: "Server error: " + error.message });
  }
});

// ============================================
// GET single workout by ID
// GET /workouts/:id
// ============================================
router.get('/:id', async (req, res) => {
  try {
    const workout = await prisma.workouts.findUnique({
      where: { workout_id: parseInt(req.params.id) },
      include: { exercise: true }
    });

    if (!workout) {
      return res.status(404).json({ error: "Workout not found" });
    }

    res.json(workout);
  } catch (error) {
    res.status(500).json({ error: "Server error: " + error.message });
  }
});

// ============================================
// CREATE new workout (Log a workout)
// POST /workouts
// ============================================
router.post('/', async (req, res) => {
  try {
    const { user_id, exercise_id, weight, reps, sets, notes } = req.body;

    const newWorkout = await prisma.workouts.create({
      data: {
        user_id: parseInt(user_id),
        exercise_id: parseInt(exercise_id),
        weight: parseFloat(weight),
        reps: parseInt(reps),
        sets: parseInt(sets),
        notes: notes
      },
      include: { exercise: true }
    });

    res.json({
      message: "Workout logged successfully",
      workout: newWorkout
    });
  } catch (error) {
    res.status(500).json({ error: "Server error: " + error.message });
  }
});

// ============================================
// UPDATE workout
// PUT /workouts/:id
// ============================================
router.put('/:id', async (req, res) => {
  try {
    const { weight, reps, sets, notes } = req.body;

    const updatedWorkout = await prisma.workouts.update({
      where: { workout_id: parseInt(req.params.id) },
      data: {
        weight: parseFloat(weight),
        reps: parseInt(reps),
        sets: parseInt(sets),
        notes: notes
      },
      include: { exercise: true }
    });

    res.json({
      message: "Workout updated successfully",
      workout: updatedWorkout
    });
  } catch (error) {
    res.status(500).json({ error: "Server error: " + error.message });
  }
});

// ============================================
// DELETE workout
// DELETE /workouts/:id
// ============================================
router.delete('/:id', async (req, res) => {
  try {
    await prisma.workouts.delete({
      where: { workout_id: parseInt(req.params.id) }
    });

    res.json({ message: "Workout deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: "Server error: " + error.message });
  }
});

module.exports = router;