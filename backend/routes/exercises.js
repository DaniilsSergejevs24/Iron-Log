const express = require('express');
const router = express.Router();

const { PrismaClient } = require('../generated/prisma');
const prisma = new PrismaClient();

// ============================================
// GET all exercises
// GET /exercises
// ============================================
router.get('/', async (req, res) => {
  try {
    const exercises = await prisma.exercises.findMany();
    res.json(exercises);
  } catch (error) {
    res.status(500).json({ error: "Server error: " + error.message });
  }
});

// ============================================
// GET single exercise by ID
// GET /exercises/:id
// ============================================
router.get('/:id', async (req, res) => {
  try {
    const exercise = await prisma.exercises.findUnique({
      where: { exercise_id: parseInt(req.params.id) }
    });

    if (!exercise) {
      return res.status(404).json({ error: "Exercise not found" });
    }

    res.json(exercise);
  } catch (error) {
    res.status(500).json({ error: "Server error: " + error.message });
  }
});

// ============================================
// CREATE new exercise (Admin only)
// POST /exercises
// ============================================
router.post('/', async (req, res) => {
  try {
    const { name, description, video_url, muscle_group } = req.body;

    const newExercise = await prisma.exercises.create({
      data: {
        name: name,
        description: description,
        video_url: video_url,
        muscle_group: muscle_group
      }
    });

    res.json({
      message: "Exercise created successfully",
      exercise: newExercise
    });
  } catch (error) {
    res.status(500).json({ error: "Server error: " + error.message });
  }
});

// ============================================
// UPDATE exercise (Admin only)
// PUT /exercises/:id
// ============================================
router.put('/:id', async (req, res) => {
  try {
    const { name, description, video_url, muscle_group } = req.body;

    const updatedExercise = await prisma.exercises.update({
      where: { exercise_id: parseInt(req.params.id) },
      data: {
        name: name,
        description: description,
        video_url: video_url,
        muscle_group: muscle_group
      }
    });

    res.json({
      message: "Exercise updated successfully",
      exercise: updatedExercise
    });
  } catch (error) {
    res.status(500).json({ error: "Server error: " + error.message });
  }
});

// ============================================
// DELETE exercise (Admin only)
// DELETE /exercises/:id
// ============================================
router.delete('/:id', async (req, res) => {
  try {
    await prisma.exercises.delete({
      where: { exercise_id: parseInt(req.params.id) }
    });

    res.json({ message: "Exercise deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: "Server error: " + error.message });
  }
});

module.exports = router;