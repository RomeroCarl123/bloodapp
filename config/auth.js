const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const pool = require("./db");

const JWT_SECRET =
  process.env.JWT_SECRET || "your-secret-key-change-in-production";

// ============================================================================
// USER REGISTRATION
// ============================================================================
async function registerUser(email, password, fullName, bloodType) {
  try {
    // Check if user already exists
    const existingUser = await pool.query(
      "SELECT id FROM users WHERE email = $1",
      [email],
    );
    if (existingUser.rows.length > 0) {
      return { success: false, error: "Email already registered" };
    }

    // Hash password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Insert user
    const result = await pool.query(
      "INSERT INTO users (email, password, full_name, blood_type) VALUES ($1, $2, $3, $4) RETURNING id, email, full_name, blood_type, created_at",
      [email, hashedPassword, fullName, bloodType],
    );

    const user = result.rows[0];
    const token = generateToken(user.id);

    return {
      success: true,
      user: {
        id: user.id,
        email: user.email,
        fullName: user.full_name,
        bloodType: user.blood_type,
      },
      token,
    };
  } catch (err) {
    console.error("Registration error:", err.message);
    return { success: false, error: err.message || "Registration failed" };
  }
}

// ============================================================================
// USER LOGIN
// ============================================================================
async function loginUser(email, password) {
  try {
    // Find user by email
    const result = await pool.query("SELECT * FROM users WHERE email = $1", [
      email,
    ]);
    if (result.rows.length === 0) {
      return { success: false, error: "Invalid email or password" };
    }

    const user = result.rows[0];

    // Compare passwords
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return { success: false, error: "Invalid email or password" };
    }

    const token = generateToken(user.id);

    return {
      success: true,
      user: {
        id: user.id,
        email: user.email,
        fullName: user.full_name,
      },
      token,
    };
  } catch (err) {
    console.error("Login error:", err);
    return { success: false, error: "Login failed" };
  }
}

// ============================================================================
// GENERATE JWT TOKEN
// ============================================================================
function generateToken(userId) {
  return jwt.sign({ userId }, JWT_SECRET, { expiresIn: "24h" });
}

// ============================================================================
// VERIFY JWT TOKEN
// ============================================================================
function verifyToken(token) {
  try {
    return jwt.verify(token, JWT_SECRET);
  } catch (err) {
    return null;
  }
}

// ============================================================================
// GET USER BY ID
// ============================================================================
async function getUserById(userId) {
  try {
    const result = await pool.query(
      "SELECT id, email, full_name, blood_type, created_at FROM users WHERE id = $1",
      [userId],
    );
    return result.rows[0] || null;
  } catch (err) {
    console.error("Get user error:", err);
    return null;
  }
}

// ============================================================================
// MIDDLEWARE: VERIFY AUTH TOKEN
// ============================================================================
function verifyAuthToken(req, res, next) {
  const token = req.headers.authorization?.split(" ")[1];

  if (!token) {
    return res.status(401).json({ error: "No token provided" });
  }

  const decoded = verifyToken(token);
  if (!decoded) {
    return res.status(401).json({ error: "Invalid or expired token" });
  }

  req.userId = decoded.userId;
  next();
}

module.exports = {
  registerUser,
  loginUser,
  generateToken,
  verifyToken,
  getUserById,
  verifyAuthToken,
};
