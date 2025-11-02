const express = require('express');
const router = express.Router();


const tasks = [
  { id: 1, title: "Learn Node.js", completed: false, priority: "high", createdAt: new Date() },
  { id: 2, title: "Build REST API", completed: false, priority: "medium", createdAt: new Date() },
  { id: 3, title: "Test with Postman", completed: false, priority: "low", createdAt: new Date() },
  { id: 4, title: "Write README", completed: false, priority: "medium", createdAt: new Date() },
  { id: 5, title: "Push to GitHub", completed: false, priority: "high", createdAt: new Date() },
];


router.get('/', (req, res) => {
  res.json(tasks);
});

router.get('/:id', (req, res) => {
  const id = parseInt(req.params.id, 10);

  if (Number.isNaN(id)) {
    return res.status(404).json({ error: 'Task not found' });
  }

  const task = tasks.find(t => t.id === id);

  if (!task) {
    return res.status(404).json({ error: 'Task not found' });
  }

  return res.json(task);
});

module.exports = router;
