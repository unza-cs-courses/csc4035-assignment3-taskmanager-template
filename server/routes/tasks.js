/**
 * Assignment 3: Task Management Application
 * CSC4035 Web Programming and Technologies
 *
 * routes/tasks.js - Task API routes
 *
 * TODO: Implement all route handlers
 */

const express = require('express');
const router = express.Router();
const taskController = require('../controllers/taskController');
const { validateTask, validateTaskUpdate } = require('../middleware/validation');

// ============================================================
// TASK ROUTES
// TODO: Implement each route
// ============================================================

/**
 * GET /api/tasks
 * Get all tasks
 *
 * TODO: Implement this route
 * - Call taskController.getAllTasks
 * - Return array of tasks
 */
router.get('/', (req, res, next) => {
    // TODO: Implement
    // Example:
    // try {
    //     const tasks = taskController.getAllTasks();
    //     res.json(tasks);
    // } catch (error) {
    //     next(error);
    // }

    res.status(501).json({ message: 'GET /api/tasks not implemented' });
});

/**
 * GET /api/tasks/:id
 * Get a single task by ID
 *
 * TODO: Implement this route
 * - Get ID from req.params
 * - Call taskController.getTaskById
 * - Return 404 if not found
 */
router.get('/:id', (req, res, next) => {
    // TODO: Implement
    // Example:
    // try {
    //     const id = parseInt(req.params.id);
    //     const task = taskController.getTaskById(id);
    //
    //     if (!task) {
    //         return res.status(404).json({ message: 'Task not found' });
    //     }
    //
    //     res.json(task);
    // } catch (error) {
    //     next(error);
    // }

    res.status(501).json({ message: 'GET /api/tasks/:id not implemented' });
});

/**
 * POST /api/tasks
 * Create a new task
 *
 * TODO: Implement this route
 * - Validate request body (use middleware)
 * - Call taskController.createTask
 * - Return 201 with created task
 */
router.post('/', validateTask, (req, res, next) => {
    // TODO: Implement
    // Example:
    // try {
    //     const { title, description, priority } = req.body;
    //     const newTask = taskController.createTask({ title, description, priority });
    //     res.status(201).json(newTask);
    // } catch (error) {
    //     next(error);
    // }

    res.status(501).json({ message: 'POST /api/tasks not implemented' });
});

/**
 * PUT /api/tasks/:id
 * Update an existing task
 *
 * TODO: Implement this route
 * - Get ID from req.params
 * - Validate request body
 * - Call taskController.updateTask
 * - Return 404 if not found
 */
router.put('/:id', validateTaskUpdate, (req, res, next) => {
    // TODO: Implement
    // Example:
    // try {
    //     const id = parseInt(req.params.id);
    //     const updates = req.body;
    //     const updatedTask = taskController.updateTask(id, updates);
    //
    //     if (!updatedTask) {
    //         return res.status(404).json({ message: 'Task not found' });
    //     }
    //
    //     res.json(updatedTask);
    // } catch (error) {
    //     next(error);
    // }

    res.status(501).json({ message: 'PUT /api/tasks/:id not implemented' });
});

/**
 * DELETE /api/tasks/:id
 * Delete a task
 *
 * TODO: Implement this route
 * - Get ID from req.params
 * - Call taskController.deleteTask
 * - Return 404 if not found
 */
router.delete('/:id', (req, res, next) => {
    // TODO: Implement
    // Example:
    // try {
    //     const id = parseInt(req.params.id);
    //     const deleted = taskController.deleteTask(id);
    //
    //     if (!deleted) {
    //         return res.status(404).json({ message: 'Task not found' });
    //     }
    //
    //     res.json({ message: 'Task deleted successfully' });
    // } catch (error) {
    //     next(error);
    // }

    res.status(501).json({ message: 'DELETE /api/tasks/:id not implemented' });
});

module.exports = router;
