/**
 * Assignment 3: Task Management Application
 * CSC4035 Web Programming and Technologies
 *
 * models/Task.js - Task data model
 *
 * This model handles data persistence using a JSON file.
 * TODO: Implement all model functions
 */

const fs = require('fs');
const path = require('path');

// Path to data file
const DATA_FILE = path.join(__dirname, '../data/tasks.json');

// ============================================================
// HELPER FUNCTIONS
// ============================================================

/**
 * Load tasks from JSON file
 *
 * @returns {Array} Array of tasks
 */
function loadTasks() {
    try {
        if (!fs.existsSync(DATA_FILE)) {
            // Create file with empty array if it doesn't exist
            saveTasks([]);
            return [];
        }
        const data = fs.readFileSync(DATA_FILE, 'utf8');
        return JSON.parse(data);
    } catch (error) {
        console.error('Error loading tasks:', error);
        return [];
    }
}

/**
 * Save tasks to JSON file
 *
 * @param {Array} tasks - Array of tasks to save
 */
function saveTasks(tasks) {
    try {
        fs.writeFileSync(DATA_FILE, JSON.stringify(tasks, null, 2));
    } catch (error) {
        console.error('Error saving tasks:', error);
        throw error;
    }
}

/**
 * Generate next task ID
 *
 * @param {Array} tasks - Current tasks array
 * @returns {number} Next available ID
 */
function generateId(tasks) {
    if (tasks.length === 0) return 1;
    const maxId = Math.max(...tasks.map(t => t.id));
    return maxId + 1;
}

// ============================================================
// MODEL FUNCTIONS
// TODO: Implement these functions
// ============================================================

/**
 * Find all tasks
 *
 * TODO: Implement this function
 *
 * @returns {Array} All tasks
 */
function findAll() {
    // TODO: Implement
    // Example:
    // return loadTasks();

    throw new Error('Task.findAll() not implemented');
}

/**
 * Find task by ID
 *
 * TODO: Implement this function
 *
 * @param {number} id - Task ID
 * @returns {Object|null} Task or null if not found
 */
function findById(id) {
    // TODO: Implement
    // Example:
    // const tasks = loadTasks();
    // return tasks.find(task => task.id === id) || null;

    throw new Error('Task.findById() not implemented');
}

/**
 * Create a new task
 *
 * TODO: Implement this function
 *
 * @param {Object} taskData - Task data
 * @returns {Object} Created task with ID and timestamp
 */
function create(taskData) {
    // TODO: Implement
    // Example:
    // const tasks = loadTasks();
    //
    // const newTask = {
    //     id: generateId(tasks),
    //     title: taskData.title,
    //     description: taskData.description || '',
    //     priority: taskData.priority || 'medium',
    //     completed: false,
    //     createdAt: new Date().toISOString()
    // };
    //
    // tasks.push(newTask);
    // saveTasks(tasks);
    //
    // return newTask;

    throw new Error('Task.create() not implemented');
}

/**
 * Update a task
 *
 * TODO: Implement this function
 *
 * @param {number} id - Task ID
 * @param {Object} updates - Fields to update
 * @returns {Object|null} Updated task or null if not found
 */
function update(id, updates) {
    // TODO: Implement
    // Example:
    // const tasks = loadTasks();
    // const index = tasks.findIndex(task => task.id === id);
    //
    // if (index === -1) return null;
    //
    // // Update only provided fields
    // tasks[index] = {
    //     ...tasks[index],
    //     ...updates,
    //     id: tasks[index].id, // Prevent ID change
    //     createdAt: tasks[index].createdAt // Preserve creation date
    // };
    //
    // saveTasks(tasks);
    // return tasks[index];

    throw new Error('Task.update() not implemented');
}

/**
 * Delete a task
 *
 * TODO: Implement this function
 *
 * @param {number} id - Task ID
 * @returns {boolean} True if deleted, false if not found
 */
function deleteTask(id) {
    // TODO: Implement
    // Example:
    // const tasks = loadTasks();
    // const index = tasks.findIndex(task => task.id === id);
    //
    // if (index === -1) return false;
    //
    // tasks.splice(index, 1);
    // saveTasks(tasks);
    //
    // return true;

    throw new Error('Task.delete() not implemented');
}

module.exports = {
    findAll,
    findById,
    create,
    update,
    delete: deleteTask
};
