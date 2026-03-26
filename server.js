require("dotenv").config();

const express = require("express");
const path = require("path");
const pool = require("./config/db");

const app = express();
const port = process.env.PORT || 3000;

// Serve static files
app.use(express.static(path.join(__dirname, "public")));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const renderIndex = require("./public/index");
const renderLogin = require("./public/login");
const renderRegister = require("./public/register");
const authRoutes = require("./routes/auth");

app.get("/ping", (req, res) => res.send("pong"));

app.get("/", (req, res) => {
  res.send(renderIndex());
});

app.get("/login", (req, res) => {
  res.send(renderLogin());
});

app.get("/register", (req, res) => {
  res.send(renderRegister());
});

// ✅ API Routes
app.use("/api/auth", authRoutes);

// ✅ Test database route
app.get("/test-db", async (req, res) => {
  try {
    const result = await pool.query("SELECT NOW()");
    res.json(result.rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

const server = app.listen(port, () => {
  console.log(`LifeLine server running: http://localhost:${port}`);
});

server.on("error", (err) => {
  if (err.code === "EADDRINUSE") {
    console.error(
      `Port ${port} is already in use. Try stopping the process using that port or set PORT environment variable.`,
    );
  } else {
    console.error("Server error:", err);
  }
  process.exit(1);
});
