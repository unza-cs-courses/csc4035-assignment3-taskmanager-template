/**
 * Assignment 3: Task Management Application
 * CSC4035 Web Programming and Technologies
 *
 * middleware/validation.js - Input validation middleware
 *
 * TODO: Implement validation middleware
 */

// Valid priority values
const VALID_PRIORITIES = ['low', 'medium', 'high'];

/**
 * Validate task creation request
 *
 * TODO: Implement this middleware
 * Requirements:
 * - title is required and must be a non-empty string
 * - description is optional
 * - priority is optional but must be 'low', 'medium', or 'high'
 *
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 * @param {Function} next - Express next function
 */
function validateTask(req, res, next) {
    // TODO: Implement validation
    // Example:
    // const { title, priority } = req.body;
    //
    // // Check title
    // if (!title || typeof title !== 'string' || title.trim() === '') {
    //     return res.status(400).json({
    //         success: false,
    //         message: 'Title is required and must be a non-empty string'
    //     });
    // }
    //
    // // Check priority if provided
    // if (priority && !VALID_PRIORITIES.includes(priority)) {
    //     return res.status(400).json({
    //         success: false,
    //         message: `Priority must be one of: ${VALID_PRIORITIES.join(', ')}`
    //     });
    // }
    //
    // // Validation passed
    // next();

    // For now, pass through (remove this line when implemented)
    next();
}

/**
 * Validate task update request
 *
 * TODO: Implement this middleware
 * Requirements:
 * - At least one field must be provided
 * - If title provided, must be non-empty string
 * - If priority provided, must be valid
 * - If completed provided, must be boolean
 *
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 * @param {Function} next - Express next function
 */
function validateTaskUpdate(req, res, next) {
    // TODO: Implement validation
    // Example:
    // const { title, priority, completed, description } = req.body;
    //
    // // Check if at least one field is provided
    // if (!title && !priority && completed === undefined && !description) {
    //     return res.status(400).json({
    //         success: false,
    //         message: 'At least one field must be provided for update'
    //     });
    // }
    //
    // // Validate title if provided
    // if (title !== undefined && (typeof title !== 'string' || title.trim() === '')) {
    //     return res.status(400).json({
    //         success: false,
    //         message: 'Title must be a non-empty string'
    //     });
    // }
    //
    // // Validate priority if provided
    // if (priority && !VALID_PRIORITIES.includes(priority)) {
    //     return res.status(400).json({
    //         success: false,
    //         message: `Priority must be one of: ${VALID_PRIORITIES.join(', ')}`
    //     });
    // }
    //
    // // Validate completed if provided
    // if (completed !== undefined && typeof completed !== 'boolean') {
    //     return res.status(400).json({
    //         success: false,
    //         message: 'Completed must be a boolean'
    //     });
    // }
    //
    // next();

    // For now, pass through (remove this line when implemented)
    next();
}

/**
 * Validate ID parameter
 *
 * TODO: Implement this middleware (optional)
 *
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 * @param {Function} next - Express next function
 */
function validateId(req, res, next) {
    const id = parseInt(req.params.id);

    if (isNaN(id) || id < 1) {
        return res.status(400).json({
            success: false,
            message: 'Invalid task ID'
        });
    }

    req.params.id = id;
    next();
}

module.exports = {
    validateTask,
    validateTaskUpdate,
    validateId,
    VALID_PRIORITIES
};
