const express = require('express');
const mysql = require('mysql2/promise');
const path = require('path');

const app = express();
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

// MySQL connection (configure with your credentials)
const dbConfig = {
  host: process.env.DB_HOST || 'localhost',
  user: process.env.DB_USER || 'root',
  password: process.env.DB_PASSWORD || '',
  database: process.env.DB_NAME || 'taskmanager',
};

async function getDB() {
  return await mysql.createConnection(dbConfig);
}

// GET all tasks
app.get('/api/tasks', async (req, res) => {
  try {
    const db = await getDB();
    const [rows] = await db.execute('SELECT * FROM tasks ORDER BY createdAt DESC');
    await db.end();
    res.json(rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// POST create task
app.post('/api/tasks', async (req, res) => {
  const { title, priority } = req.body;
  try {
    const db = await getDB();
    const [result] = await db.execute(
      'INSERT INTO tasks (title, priority, done, createdAt) VALUES (?, ?, false, NOW())',
      [title, priority]
    );
    const [rows] = await db.execute('SELECT * FROM tasks WHERE id = ?', [result.insertId]);
    await db.end();
    res.json(rows[0]);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// PUT update task
app.put('/api/tasks/:id', async (req, res) => {
  const { title, priority, done } = req.body;
  try {
    const db = await getDB();
    await db.execute(
      'UPDATE tasks SET title = ?, priority = ?, done = ? WHERE id = ?',
      [title, priority, done, req.params.id]
    );
    const [rows] = await db.execute('SELECT * FROM tasks WHERE id = ?', [req.params.id]);
    await db.end();
    res.json(rows[0]);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// DELETE task
app.delete('/api/tasks/:id', async (req, res) => {
  try {
    const db = await getDB();
    await db.execute('DELETE FROM tasks WHERE id = ?', [req.params.id]);
    await db.end();
    res.json({ success: true });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`TaskFlow running on http://localhost:${PORT}`));
