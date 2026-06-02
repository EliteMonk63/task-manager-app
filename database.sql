-- TaskFlow Database Schema
-- Run this in MySQL to set up the database

CREATE DATABASE IF NOT EXISTS taskmanager;
USE taskmanager;

CREATE TABLE IF NOT EXISTS tasks (
  id INT AUTO_INCREMENT PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  priority ENUM('low', 'medium', 'high') DEFAULT 'medium',
  done BOOLEAN DEFAULT false,
  createdAt DATETIME DEFAULT CURRENT_TIMESTAMP
);

-- Sample data
INSERT INTO tasks (title, priority, done) VALUES
  ('Set up project structure', 'high', true),
  ('Build REST API endpoints', 'high', false),
  ('Style the frontend', 'medium', false),
  ('Connect to MySQL database', 'medium', false),
  ('Deploy to production', 'low', false);
