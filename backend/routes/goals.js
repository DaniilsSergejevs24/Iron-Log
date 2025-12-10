const express = require('express');
const router = express.Router();

const { PrismaClient } = require('../generated/prisma');
const prisma = new PrismaClient();

// ============================================
// GET all goals for a user
// GET /goals/user/:userId
// ============================================
router.get('/user/:userId', async (req, res) => {
  try {
    const goals = await prisma.goals.findMany({
      where: { user_id: parseInt(req.params.userId) },
      include: { exercise: true }
    });

    res.json(goals);
  } catch (error) {
    res.status(500).json({ error: "Server error: " + error.message });
  }
});

// ============================================
// CREATE new goal
// POST /goals
// ============================================
router.post('/', async (req, res) => {
  try {
    const { user_id, exercise_id, target_weight, target_reps } = req.body;

    const newGoal = await prisma.goals.create({
      data: {
        user_id: parseInt(user_id),
        exercise_id: parseInt(exercise_id),
        target_weight: target_weight ? parseFloat(target_weight) : null,
        target_reps: target_reps ? parseInt(target_reps) : null,
        achieved: false
      },
      include: { exercise: true }
    });

    res.json({
      message: "Goal created successfully",
      goal: newGoal
    });
  } catch (error) {
    res.status(500).json({ error: "Server error: " + error.message });
  }
});

// ============================================
// UPDATE goal (mark as achieved)
// PUT /goals/:id
// ============================================
router.put('/:id', async (req, res) => {
  try {
    const { target_weight, target_reps, achieved } = req.body;

    const updatedGoal = await prisma.goals.update({
      where: { goal_id: parseInt(req.params.id) },
      data: {
        target_weight: target_weight ? parseFloat(target_weight) : null,
        target_reps: target_reps ? parseInt(target_reps) : null,
        achieved: achieved
      },
      include: { exercise: true }
    });

    res.json({
      message: "Goal updated successfully",
      goal: updatedGoal
    });
  } catch (error) {
    res.status(500).json({ error: "Server error: " + error.message });
  }
});

// ============================================
// DELETE goal
// DELETE /goals/:id
// ============================================
router.delete('/:id', async (req, res) => {
  try {
    await prisma.goals.delete({
      where: { goal_id: parseInt(req.params.id) }
    });

    res.json({ message: "Goal deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: "Server error: " + error.message });
  }
});

module.exports = router;