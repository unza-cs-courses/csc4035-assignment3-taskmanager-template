/**
 * Assignment 3: Task Management Application
 * CSC4035 Web Programming and Technologies
 *
 * api.js - API communication functions
 *
 * This file handles all communication with the backend API.
 * TODO: Implement all API functions using fetch
 */

// API Base URL
const API_URL = '/api/tasks';

// ============================================================
// API FUNCTIONS
// TODO: Implement each function using fetch API
// ============================================================

/**
 * Get all tasks from the API
 *
 * TODO: Implement this function
 * Requirements:
 * - Use fetch to GET /api/tasks
 * - Handle response and parse JSON
 * - Throw error if response is not ok
 *
 * @returns {Promise<Array>} Array of tasks
 */
async function fetchAllTasks() {
    // TODO: Implement
    // Example:
    // const response = await fetch(API_URL);
    //
    // if (!response.ok) {
    //     throw new Error('Failed to fetch tasks');
    // }
    //
    // return response.json();

    throw new Error('fetchAllTasks() not implemented');
}

/**
 * Get a single task by ID
 *
 * TODO: Implement this function
 *
 * @param {number} id - Task ID
 * @returns {Promise<Object>} Task object
 */
async function fetchTaskById(id) {
    // TODO: Implement
    // Example:
    // const response = await fetch(`${API_URL}/${id}`);
    //
    // if (!response.ok) {
    //     throw new Error('Task not found');
    // }
    //
    // return response.json();

    throw new Error('fetchTaskById() not implemented');
}

/**
 * Create a new task
 *
 * TODO: Implement this function
 * Requirements:
 * - Use fetch to POST to /api/tasks
 * - Send JSON body with task data
 * - Set Content-Type header
 *
 * @param {Object} taskData - Task data {title, description, priority}
 * @returns {Promise<Object>} Created task
 */
async function createTask(taskData) {
    // TODO: Implement
    // Example:
    // const response = await fetch(API_URL, {
    //     method: 'POST',
    //     headers: {
    //         'Content-Type': 'application/json'
    //     },
    //     body: JSON.stringify(taskData)
    // });
    //
    // if (!response.ok) {
    //     const error = await response.json();
    //     throw new Error(error.message || 'Failed to create task');
    // }
    //
    // return response.json();

    throw new Error('createTask() not implemented');
}

/**
 * Update an existing task
 *
 * TODO: Implement this function
 * Requirements:
 * - Use fetch to PUT to /api/tasks/:id
 * - Send JSON body with updates
 *
 * @param {number} id - Task ID
 * @param {Object} updates - Fields to update
 * @returns {Promise<Object>} Updated task
 */
async function updateTask(id, updates) {
    // TODO: Implement
    // Example:
    // const response = await fetch(`${API_URL}/${id}`, {
    //     method: 'PUT',
    //     headers: {
    //         'Content-Type': 'application/json'
    //     },
    //     body: JSON.stringify(updates)
    // });
    //
    // if (!response.ok) {
    //     const error = await response.json();
    //     throw new Error(error.message || 'Failed to update task');
    // }
    //
    // return response.json();

    throw new Error('updateTask() not implemented');
}

/**
 * Delete a task
 *
 * TODO: Implement this function
 * Requirements:
 * - Use fetch to DELETE /api/tasks/:id
 *
 * @param {number} id - Task ID
 * @returns {Promise<Object>} Success response
 */
async function deleteTask(id) {
    // TODO: Implement
    // Example:
    // const response = await fetch(`${API_URL}/${id}`, {
    //     method: 'DELETE'
    // });
    //
    // if (!response.ok) {
    //     throw new Error('Failed to delete task');
    // }
    //
    // return response.json();

    throw new Error('deleteTask() not implemented');
}

/**
 * Toggle task completion status
 *
 * TODO: Implement this function
 * This is a convenience function that updates the completed field
 *
 * @param {number} id - Task ID
 * @param {boolean} completed - New completion status
 * @returns {Promise<Object>} Updated task
 */
async function toggleTaskComplete(id, completed) {
    // TODO: Implement
    // Example:
    // return updateTask(id, { completed });

    throw new Error('toggleTaskComplete() not implemented');
}

// Export for module use (if needed)
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        fetchAllTasks,
        fetchTaskById,
        createTask,
        updateTask,
        deleteTask,
        toggleTaskComplete
    };
}
