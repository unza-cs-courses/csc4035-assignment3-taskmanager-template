/**
 * Assignment 3: Task Management Application
 * CSC4035 Web Programming and Technologies
 *
 * server.js - Main Express server
 *
 * TODO: Complete the server setup
 */

const express = require('express');
const cors = require('cors');
const path = require('path');

// Import routes
const taskRoutes = require('./routes/tasks');

const app = express();
const PORT = process.env.PORT || 3000;

// ============================================================
// MIDDLEWARE SETUP
// TODO: Configure middleware
// ============================================================

// Enable CORS for all routes
app.use(cors());

// Parse JSON request bodies
app.use(express.json());

// Parse URL-encoded request bodies
app.use(express.urlencoded({ extended: true }));

// Serve static files from public directory
app.use(express.static(path.join(__dirname, '../public')));

// ============================================================
// ROUTES
// TODO: Set up API routes
// ============================================================

// API Routes
// TODO: Mount task routes at /api/tasks
app.use('/api/tasks', taskRoutes);

// Serve index.html for root route
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'));
});

// ============================================================
// ERROR HANDLING MIDDLEWARE
// TODO: Implement error handling
// ============================================================

// 404 Handler - Route not found
app.use((req, res, next) => {
    res.status(404).json({
        success: false,
        message: 'Route not found'
    });
});

// Global Error Handler
app.use((err, req, res, next) => {
    console.error('Error:', err.message);

    res.status(err.status || 500).json({
        success: false,
        message: err.message || 'Internal Server Error'
    });
});

// ============================================================
// START SERVER
// ============================================================

// Only start server if this file is run directly (not required by tests)
if (require.main === module) {
    app.listen(PORT, () => {
        console.log(`Server running on http://localhost:${PORT}`);
        console.log(`API available at http://localhost:${PORT}/api/tasks`);
    });
}

module.exports = app;
