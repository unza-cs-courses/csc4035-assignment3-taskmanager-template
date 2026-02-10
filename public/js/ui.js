/**
 * Assignment 3: Task Management Application
 * CSC4035 Web Programming and Technologies
 *
 * ui.js - User Interface rendering functions
 *
 * This file handles all DOM manipulation and UI updates.
 * TODO: Implement all UI functions
 */

// DOM Element References
const taskList = document.getElementById('task-list');
const taskForm = document.getElementById('task-form');
const taskCount = document.getElementById('task-count');
const loadingElement = document.getElementById('loading');
const errorElement = document.getElementById('error-message');
const emptyState = document.getElementById('empty-state');
const deleteModal = document.getElementById('delete-modal');

// ============================================================
// UI FUNCTIONS
// TODO: Implement each function
// ============================================================

/**
 * Show loading state
 */
function showLoading() {
    loadingElement.classList.remove('hidden');
    taskList.classList.add('hidden');
    errorElement.classList.add('hidden');
    emptyState.classList.add('hidden');
}

/**
 * Hide loading state
 */
function hideLoading() {
    loadingElement.classList.add('hidden');
}

/**
 * Show error message
 *
 * @param {string} message - Error message to display
 */
function showError(message) {
    hideLoading();
    errorElement.classList.remove('hidden');
    errorElement.querySelector('p').textContent = message;
    taskList.classList.add('hidden');
}

/**
 * Hide error message
 */
function hideError() {
    errorElement.classList.add('hidden');
}

/**
 * Render task list
 *
 * TODO: Implement this function
 * Requirements:
 * - Clear existing task list
 * - Create task item for each task using createTaskElement
 * - Show empty state if no tasks
 * - Update task count
 *
 * @param {Array} tasks - Array of task objects
 */
function renderTaskList(tasks) {
    // TODO: Implement
    // Example:
    // hideLoading();
    // hideError();
    //
    // // Clear existing tasks
    // taskList.innerHTML = '';
    //
    // if (tasks.length === 0) {
    //     emptyState.classList.remove('hidden');
    //     taskList.classList.add('hidden');
    // } else {
    //     emptyState.classList.add('hidden');
    //     taskList.classList.remove('hidden');
    //
    //     tasks.forEach(task => {
    //         const taskElement = createTaskElement(task);
    //         taskList.appendChild(taskElement);
    //     });
    // }
    //
    // updateTaskCount(tasks.length);

    console.log('TODO: Implement renderTaskList()');
}

/**
 * Create a task list item element
 *
 * TODO: Implement this function
 * Requirements:
 * - Create li element with task-item class
 * - Include checkbox for completion toggle
 * - Show title, description, priority, date
 * - Include edit and delete buttons
 * - Add event listeners for actions
 *
 * @param {Object} task - Task object
 * @returns {HTMLElement} Task list item element
 */
function createTaskElement(task) {
    // TODO: Implement
    // Example:
    // const li = document.createElement('li');
    // li.className = `task-item ${task.completed ? 'completed' : ''}`;
    // li.dataset.id = task.id;
    //
    // li.innerHTML = `
    //     <input
    //         type="checkbox"
    //         class="task-checkbox"
    //         ${task.completed ? 'checked' : ''}
    //     >
    //     <div class="task-content">
    //         <div class="task-title">${escapeHtml(task.title)}</div>
    //         ${task.description ? `<div class="task-description">${escapeHtml(task.description)}</div>` : ''}
    //         <div class="task-meta">
    //             <span class="task-priority ${task.priority}">${task.priority}</span>
    //             <span class="task-date">${formatDate(task.createdAt)}</span>
    //         </div>
    //     </div>
    //     <div class="task-actions">
    //         <button class="btn btn-small btn-secondary edit-btn">Edit</button>
    //         <button class="btn btn-small btn-danger delete-btn">Delete</button>
    //     </div>
    // `;
    //
    // // Add event listeners
    // const checkbox = li.querySelector('.task-checkbox');
    // checkbox.addEventListener('change', () => handleToggleComplete(task.id, checkbox.checked));
    //
    // const editBtn = li.querySelector('.edit-btn');
    // editBtn.addEventListener('click', () => handleEditTask(task));
    //
    // const deleteBtn = li.querySelector('.delete-btn');
    // deleteBtn.addEventListener('click', () => handleDeleteTask(task.id));
    //
    // return li;

    console.log('TODO: Implement createTaskElement()');
    return document.createElement('li');
}

/**
 * Update task count display
 *
 * @param {number} count - Number of tasks
 */
function updateTaskCount(count) {
    taskCount.textContent = `(${count})`;
}

/**
 * Reset form to add mode
 */
function resetForm() {
    taskForm.reset();
    document.getElementById('form-button-text').textContent = 'Add Task';
    document.getElementById('cancel-edit').classList.add('hidden');
    taskForm.dataset.editId = '';
}

/**
 * Set form to edit mode
 *
 * @param {Object} task - Task to edit
 */
function setFormEditMode(task) {
    document.getElementById('task-title').value = task.title;
    document.getElementById('task-description').value = task.description || '';
    document.getElementById('task-priority').value = task.priority;
    document.getElementById('form-button-text').textContent = 'Update Task';
    document.getElementById('cancel-edit').classList.remove('hidden');
    taskForm.dataset.editId = task.id;

    // Scroll to form
    taskForm.scrollIntoView({ behavior: 'smooth' });
}

/**
 * Show delete confirmation modal
 *
 * @param {number} taskId - ID of task to delete
 */
function showDeleteModal(taskId) {
    deleteModal.classList.remove('hidden');
    deleteModal.dataset.taskId = taskId;
}

/**
 * Hide delete confirmation modal
 */
function hideDeleteModal() {
    deleteModal.classList.add('hidden');
    deleteModal.dataset.taskId = '';
}

/**
 * Escape HTML to prevent XSS
 *
 * @param {string} text - Text to escape
 * @returns {string} Escaped text
 */
function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}

/**
 * Format date for display
 *
 * @param {string} dateString - ISO date string
 * @returns {string} Formatted date
 */
function formatDate(dateString) {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric'
    });
}

/**
 * Show notification message
 *
 * @param {string} message - Message to show
 * @param {string} type - Type: 'success', 'error', 'info'
 */
function showNotification(message, type = 'info') {
    // TODO: Implement notification system (optional)
    console.log(`[${type.toUpperCase()}] ${message}`);
}

// Export for module use (if needed)
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        showLoading,
        hideLoading,
        showError,
        hideError,
        renderTaskList,
        createTaskElement,
        updateTaskCount,
        resetForm,
        setFormEditMode,
        showDeleteModal,
        hideDeleteModal,
        escapeHtml,
        formatDate,
        showNotification
    };
}
