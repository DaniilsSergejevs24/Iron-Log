const express = require('express');
const router = express.Router();

// Connect to database using Prisma
const { PrismaClient } = require('../generated/prisma');
const prisma = new PrismaClient();

// ============================================
// REGISTER - Create new user account
// ============================================
router.post('/register', async (req, res) => {
  try {
    // Get data from request body
    const { email, password, name } = req.body;

    // Check if user already exists
    const existingUser = await prisma.users.findUnique({
      where: { email: email }
    });

    if (existingUser) {
      return res.status(400).json({ error: "Email already registered" });
    }

    // Create new user
    const newUser = await prisma.users.create({
      data: {
        email: email,
        password: password,
        name: name,
        role: "user"
      }
    });

    res.json({ 
      message: "User registered successfully",
      user: {
        user_id: newUser.user_id,
        email: newUser.email,
        name: newUser.name,
        role: newUser.role
      }
    });

  } catch (error) {
    res.status(500).json({ error: "Server error: " + error.message });
  }
});

// ============================================
// LOGIN - User login
// ============================================
router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;

    // Find user by email
    const user = await prisma.users.findUnique({
      where: { email: email }
    });

    // Check if user exists
    if (!user) {
      return res.status(400).json({ error: "User not found" });
    }

    // Check password (simple comparison - in real app use proper hashing!)
    if (user.password !== password) {
      return res.status(400).json({ error: "Wrong password" });
    }

    // Login successful
    res.json({
      message: "Login successful",
      user: {
        user_id: user.user_id,
        email: user.email,
        name: user.name,
        role: user.role
      }
    });

  } catch (error) {
    res.status(500).json({ error: "Server error: " + error.message });
  }
});

module.exports = router;