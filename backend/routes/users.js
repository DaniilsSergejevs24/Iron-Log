const express = require('express');
const router = express.Router();

const { PrismaClient } = require('../generated/prisma');
const prisma = new PrismaClient();

// ============================================
// GET all users (Admin only)
// GET /users
// ============================================
router.get('/', async (req, res) => {
  try {
    const users = await prisma.users.findMany({
      select: {
        user_id: true,
        email: true,
        name: true,
        role: true,
        created_at: true
        // Note: we don't select password for security
      }
    });

    res.json(users);
  } catch (error) {
    res.status(500).json({ error: "Server error: " + error.message });
  }
});

// ============================================
// GET single user profile
// GET /users/:id
// ============================================
router.get('/:id', async (req, res) => {
  try {
    const user = await prisma.users.findUnique({
      where: { user_id: parseInt(req.params.id) },
      select: {
        user_id: true,
        email: true,
        name: true,
        role: true,
        created_at: true
      }
    });

    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    res.json(user);
  } catch (error) {
    res.status(500).json({ error: "Server error: " + error.message });
  }
});

// ============================================
// UPDATE user profile
// PUT /users/:id
// ============================================
router.put('/:id', async (req, res) => {
  try {
    const { name, email } = req.body;

    const updatedUser = await prisma.users.update({
      where: { user_id: parseInt(req.params.id) },
      data: {
        name: name,
        email: email
      },
      select: {
        user_id: true,
        email: true,
        name: true,
        role: true
      }
    });

    res.json({
      message: "Profile updated successfully",
      user: updatedUser
    });
  } catch (error) {
    res.status(500).json({ error: "Server error: " + error.message });
  }
});

// ============================================
// DELETE user (Admin only)
// DELETE /users/:id
// ============================================
router.delete('/:id', async (req, res) => {
  try {
    await prisma.users.delete({
      where: { user_id: parseInt(req.params.id) }
    });

    res.json({ message: "User deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: "Server error: " + error.message });
  }
});

module.exports = router;