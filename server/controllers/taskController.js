/**
 * Assignment 3: Task Management Application
 * CSC4035 Web Programming and Technologies
 *
 * controllers/taskController.js - Task business logic
 *
 * TODO: Implement all controller functions
 */

const Task = require('../models/Task');

// ============================================================
// TASK CONTROLLER FUNCTIONS
// TODO: Implement each function
// ============================================================

/**
 * Get all tasks
 *
 * TODO: Implement this function
 * - Load tasks from Task model
 * - Return array of tasks
 *
 * @returns {Array} Array of task objects
 */
function getAllTasks() {
    // TODO: Implement
    // Example:
    // return Task.findAll();

    throw new Error('getAllTasks() not implemented');
}

/**
 * Get a single task by ID
 *
 * TODO: Implement this function
 * - Find task by ID using Task model
 * - Return task or null if not found
 *
 * @param {number} id - Task ID
 * @returns {Object|null} Task object or null
 */
function getTaskById(id) {
    // TODO: Implement
    // Example:
    // return Task.findById(id);

    throw new Error('getTaskById() not implemented');
}

/**
 * Create a new task
 *
 * TODO: Implement this function
 * - Create new task using Task model
 * - Return created task
 *
 * @param {Object} taskData - Task data {title, description, priority}
 * @returns {Object} Created task object
 */
function createTask(taskData) {
    // TODO: Implement
    // Example:
    // return Task.create(taskData);

    throw new Error('createTask() not implemented');
}

/**
 * Update an existing task
 *
 * TODO: Implement this function
 * - Update task using Task model
 * - Return updated task or null if not found
 *
 * @param {number} id - Task ID
 * @param {Object} updates - Fields to update
 * @returns {Object|null} Updated task or null
 */
function updateTask(id, updates) {
    // TODO: Implement
    // Example:
    // return Task.update(id, updates);

    throw new Error('updateTask() not implemented');
}

/**
 * Delete a task
 *
 * TODO: Implement this function
 * - Delete task using Task model
 * - Return true if deleted, false if not found
 *
 * @param {number} id - Task ID
 * @returns {boolean} True if deleted
 */
function deleteTask(id) {
    // TODO: Implement
    // Example:
    // return Task.delete(id);

    throw new Error('deleteTask() not implemented');
}

/**
 * Search tasks by title
 *
 * TODO: Implement this function (optional)
 *
 * @param {string} query - Search query
 * @returns {Array} Matching tasks
 */
function searchTasks(query) {
    // TODO: Implement (optional)
    // Example:
    // const allTasks = Task.findAll();
    // return allTasks.filter(task =>
    //     task.title.toLowerCase().includes(query.toLowerCase())
    // );

    throw new Error('searchTasks() not implemented');
}

/**
 * Filter tasks by completion status
 *
 * TODO: Implement this function (optional)
 *
 * @param {boolean} completed - Filter by completion status
 * @returns {Array} Filtered tasks
 */
function filterTasks(completed) {
    // TODO: Implement (optional)
    // Example:
    // const allTasks = Task.findAll();
    // return allTasks.filter(task => task.completed === completed);

    throw new Error('filterTasks() not implemented');
}

module.exports = {
    getAllTasks,
    getTaskById,
    createTask,
    updateTask,
    deleteTask,
    searchTasks,
    filterTasks
};
