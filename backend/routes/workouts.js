const express = require('express');
const router = express.Router();

const { PrismaClient } = require('../generated/prisma');
const prisma = new PrismaClient();

// ============================================
// GET all workouts for a user (with exercises and sets)
// ============================================
router.get('/user/:userId', async (req, res) => {
  try {
    const workouts = await prisma.workouts.findMany({
      where: { user_id: parseInt(req.params.userId) },
      include: {
        workout_exercises: {
          include: {
            exercise: true,
            sets: {
              orderBy: { set_number: 'asc' }
            }
          },
          orderBy: { order: 'asc' }
        }
      },
      orderBy: { date: 'desc' }
    });

    res.json(workouts);
  } catch (error) {
    res.status(500).json({ error: "Server error: " + error.message });
  }
});

// ============================================
// GET single workout by ID
// ============================================
router.get('/:id', async (req, res) => {
  try {
    const workout = await prisma.workouts.findUnique({
      where: { workout_id: parseInt(req.params.id) },
      include: {
        workout_exercises: {
          include: {
            exercise: true,
            sets: {
              orderBy: { set_number: 'asc' }
            }
          },
          orderBy: { order: 'asc' }
        }
      }
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
// CREATE new workout session
// ============================================
router.post('/', async (req, res) => {
  try {
    const { user_id, name, notes } = req.body;

    const newWorkout = await prisma.workouts.create({
      data: {
        user_id: parseInt(user_id),
        name: name || null,
        notes: notes || null
      }
    });

    res.json({
      message: "Workout created successfully",
      workout: newWorkout
    });
  } catch (error) {
    res.status(500).json({ error: "Server error: " + error.message });
  }
});

// ============================================
// ADD exercise to workout
// ============================================
router.post('/:workoutId/exercises', async (req, res) => {
  try {
    const { exercise_id } = req.body;
    const workoutId = parseInt(req.params.workoutId);

    // Get current exercise count for order
    const existingExercises = await prisma.workout_exercises.count({
      where: { workout_id: workoutId }
    });

    const workoutExercise = await prisma.workout_exercises.create({
      data: {
        workout_id: workoutId,
        exercise_id: parseInt(exercise_id),
        order: existingExercises + 1
      },
      include: {
        exercise: true
      }
    });

    res.json({
      message: "Exercise added to workout",
      workout_exercise: workoutExercise
    });
  } catch (error) {
    res.status(500).json({ error: "Server error: " + error.message });
  }
});

// ============================================
// ADD set to workout exercise
// ============================================
router.post('/exercises/:workoutExerciseId/sets', async (req, res) => {
  try {
    const { weight, reps } = req.body;
    const workoutExerciseId = parseInt(req.params.workoutExerciseId);

    // Get current set count
    const existingSets = await prisma.sets.count({
      where: { workout_exercise_id: workoutExerciseId }
    });

    const newSet = await prisma.sets.create({
      data: {
        workout_exercise_id: workoutExerciseId,
        set_number: existingSets + 1,
        weight: parseFloat(weight),
        reps: parseInt(reps),
        completed: true
      }
    });

    res.json({
      message: "Set added",
      set: newSet
    });
  } catch (error) {
    res.status(500).json({ error: "Server error: " + error.message });
  }
});

// ============================================
// UPDATE set
// ============================================
router.put('/sets/:setId', async (req, res) => {
  try {
    const { weight, reps, completed } = req.body;

    const updatedSet = await prisma.sets.update({
      where: { set_id: parseInt(req.params.setId) },
      data: {
        weight: weight ? parseFloat(weight) : undefined,
        reps: reps ? parseInt(reps) : undefined,
        completed: completed !== undefined ? completed : undefined
      }
    });

    res.json({
      message: "Set updated",
      set: updatedSet
    });
  } catch (error) {
    res.status(500).json({ error: "Server error: " + error.message });
  }
});

// ============================================
// DELETE set
// ============================================
router.delete('/sets/:setId', async (req, res) => {
  try {
    await prisma.sets.delete({
      where: { set_id: parseInt(req.params.setId) }
    });

    res.json({ message: "Set deleted" });
  } catch (error) {
    res.status(500).json({ error: "Server error: " + error.message });
  }
});

// ============================================
// DELETE exercise from workout
// ============================================
router.delete('/exercises/:workoutExerciseId', async (req, res) => {
  try {
    await prisma.workout_exercises.delete({
      where: { workout_exercise_id: parseInt(req.params.workoutExerciseId) }
    });

    res.json({ message: "Exercise removed from workout" });
  } catch (error) {
    res.status(500).json({ error: "Server error: " + error.message });
  }
});

// ============================================
// DELETE workout
// ============================================
router.delete('/:id', async (req, res) => {
  try {
    await prisma.workouts.delete({
      where: { workout_id: parseInt(req.params.id) }
    });

    res.json({ message: "Workout deleted" });
  } catch (error) {
    res.status(500).json({ error: "Server error: " + error.message });
  }
});

// ============================================
// GET workout history for calendar
// ============================================
router.get('/calendar/:userId', async (req, res) => {
  try {
    const workouts = await prisma.workouts.findMany({
      where: { user_id: parseInt(req.params.userId) },
      select: {
        workout_id: true,
        name: true,
        date: true,
        workout_exercises: {
          select: {
            exercise: {
              select: { name: true }
            }
          }
        }
      },
      orderBy: { date: 'desc' }
    });

    res.json(workouts);
  } catch (error) {
    res.status(500).json({ error: "Server error: " + error.message });
  }
});

module.exports = router;