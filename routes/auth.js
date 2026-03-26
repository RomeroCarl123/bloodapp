const express = require("express");
const router = express.Router();
const {
  registerUser,
  loginUser,
  getUserById,
  verifyAuthToken,
} = require("../config/auth");

// ============================================================================
// POST /api/auth/register - Create a new user account
// ============================================================================
router.post("/register", async (req, res) => {
  const { email, password, fullName, bloodType } = req.body;

  // Validation
  if (!email || !password || !fullName || !bloodType) {
    return res.status(400).json({ error: "Missing required fields" });
  }

  if (password.length < 6) {
    return res
      .status(400)
      .json({ error: "Password must be at least 6 characters" });
  }

  const result = await registerUser(email, password, fullName, bloodType);

  if (!result.success) {
    return res.status(400).json({ error: result.error });
  }

  res.status(201).json(result);
});

// ============================================================================
// POST /api/auth/login - Authenticate user
// ============================================================================
router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  // Validation
  if (!email || !password) {
    return res.status(400).json({ error: "Email and password required" });
  }

  const result = await loginUser(email, password);

  if (!result.success) {
    return res.status(401).json({ error: result.error });
  }

  res.json(result);
});

// ============================================================================
// GET /api/auth/me - Get current user (protected route)
// ============================================================================
router.get("/me", verifyAuthToken, async (req, res) => {
  const user = await getUserById(req.userId);

  if (!user) {
    return res.status(404).json({ error: "User not found" });
  }

  res.json(user);
});

module.exports = router;
