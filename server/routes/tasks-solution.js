/**
 * Assignment 3: Task Management Application - SOLUTION
 * CSC4035 Web Programming and Technologies
 */

const express = require('express');
const router = express.Router();

// In-memory task storage for testing
let tasks = [
    { id: 1, title: 'Sample Task 1', description: 'First task', priority: 'medium', completed: false },
    { id: 2, title: 'Sample Task 2', description: 'Second task', priority: 'high', completed: false }
];
let nextId = 3;

// GET /api/tasks - Get all tasks
router.get('/', (req, res) => {
    res.json({
        success: true,
        tasks: tasks
    });
});

// GET /api/tasks/:id - Get single task
router.get('/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const task = tasks.find(t => t.id === id);

    if (!task) {
        return res.status(404).json({ success: false, message: 'Task not found' });
    }

    res.json({ success: true, task });
});

// POST /api/tasks - Create new task
router.post('/', (req, res) => {
    const { title, description, priority } = req.body;

    if (!title || title.trim() === '') {
        return res.status(400).json({ success: false, message: 'Title is required' });
    }

    const newTask = {
        id: nextId++,
        title: title.trim(),
        description: description || '',
        priority: priority || 'medium',
        completed: false
    };

    tasks.push(newTask);
    res.status(201).json({ success: true, task: newTask });
});

// PUT /api/tasks/:id - Update task
router.put('/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const taskIndex = tasks.findIndex(t => t.id === id);

    if (taskIndex === -1) {
        return res.status(404).json({ success: false, message: 'Task not found' });
    }

    const { title, description, priority, completed } = req.body;

    tasks[taskIndex] = {
        ...tasks[taskIndex],
        ...(title !== undefined && { title }),
        ...(description !== undefined && { description }),
        ...(priority !== undefined && { priority }),
        ...(completed !== undefined && { completed })
    };

    res.json({ success: true, task: tasks[taskIndex] });
});

// DELETE /api/tasks/:id - Delete task
router.delete('/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const taskIndex = tasks.findIndex(t => t.id === id);

    if (taskIndex === -1) {
        return res.status(404).json({ success: false, message: 'Task not found' });
    }

    tasks.splice(taskIndex, 1);
    res.json({ success: true, message: 'Task deleted' });
});

module.exports = router;
