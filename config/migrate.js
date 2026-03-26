#!/usr/bin/env node

/**
 * Add Blood Type Column Migration
 * Run this to add blood_type column to users table
 */

require("dotenv").config();
const pool = require("./db");

async function migrate() {
  console.log("🔄 Running migration: Add blood_type column...\n");

  try {
    // Add blood_type column if it doesn't exist
    await pool.query(`
      ALTER TABLE users ADD COLUMN IF NOT EXISTS blood_type VARCHAR(10);
    `);

    console.log("✅ Migration successful!");
    console.log("   - blood_type column added to users table\n");

    process.exit(0);
  } catch (err) {
    console.error("❌ Migration failed:", err.message);
    console.error("\nTroubleshooting:");
    console.error("  1. Check .env DATABASE_URL is correct");
    console.error("  2. Verify Neon database is accessible");
    console.error(
      "  3. Try running from Command Prompt instead of PowerShell\n",
    );
    process.exit(1);
  }
}

migrate();
