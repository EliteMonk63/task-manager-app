# TaskFlow — Full Stack Task Manager

A clean, modern task manager built with Node.js, Express, MySQL, and vanilla JavaScript.

![TaskFlow Preview](https://img.shields.io/badge/Status-Active-success) ![Node](https://img.shields.io/badge/Node.js-18+-green) ![MySQL](https://img.shields.io/badge/MySQL-8.0+-blue)

## Features

- ✅ Create, complete, and delete tasks
- 🔥 Priority levels (High, Medium, Low)
- 🔍 Filter by status and priority
- 📊 Live task stats (total, done, pending)
- 💾 REST API with full CRUD
- 📱 Fully responsive design

## Tech Stack

**Frontend:** HTML5, CSS3, Vanilla JavaScript  
**Backend:** Node.js, Express.js  
**Database:** MySQL  

## Getting Started

### Prerequisites
- Node.js 18+
- MySQL 8.0+

### Installation

```bash
# Clone the repo
git clone https://github.com/EliteMonk63/task-manager-app.git
cd task-manager-app

# Install dependencies
npm install

# Set up the database
mysql -u root -p < database.sql

# Start the server
npm start
```

Visit `http://localhost:3000`

### Environment Variables

Create a `.env` file:
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=yourpassword
DB_NAME=taskmanager
PORT=3000

## API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | /api/tasks | Get all tasks |
| POST | /api/tasks | Create a task |
| PUT | /api/tasks/:id | Update a task |
| DELETE | /api/tasks/:id | Delete a task |

## License

MIT © Kyle Fernandes
