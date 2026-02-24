/**
 * Assignment 3: Task Manager - Visible Test Suite
 * CSC4035 Web Programming and Technologies
 *
 * Run these tests locally with: npm test
 * Additional hidden tests will be used for final grading after the deadline.
 *
 * DO NOT MODIFY THIS FILE
 * Run with: npm test
 */

const http = require('http');
const fs = require('fs');
const path = require('path');

// Test counter
let passed = 0;
let failed = 0;

// Store created task ID for later tests
let createdTaskId = null;

// Helper function to make HTTP requests
function makeRequest(options, body = null) {
    return new Promise((resolve, reject) => {
        const req = http.request(options, (res) => {
            let data = '';
            res.on('data', chunk => data += chunk);
            res.on('end', () => {
                try {
                    resolve({
                        statusCode: res.statusCode,
                        headers: res.headers,
                        body: data ? JSON.parse(data) : null
                    });
                } catch (e) {
                    resolve({
                        statusCode: res.statusCode,
                        headers: res.headers,
                        body: data
                    });
                }
            });
        });

        req.on('error', reject);
        req.setTimeout(5000, () => {
            req.destroy();
            reject(new Error('Request timeout'));
        });

        if (body) {
            req.write(JSON.stringify(body));
        }
        req.end();
    });
}

async function test(name, fn) {
    try {
        await fn();
        console.log(`  PASS: ${name}`);
        passed++;
    } catch (e) {
        console.log(`  FAIL: ${name}`);
        console.log(`        Error: ${e.message}`);
        failed++;
    }
}

function assertEqual(actual, expected, message = '') {
    if (actual !== expected) {
        throw new Error(`Expected "${expected}", got "${actual}". ${message}`);
    }
}

function assertTrue(value, message = '') {
    if (value !== true) {
        throw new Error(`Expected true. ${message}`);
    }
}

function assertArray(value, message = '') {
    if (!Array.isArray(value)) {
        throw new Error(`Expected array. ${message}`);
    }
}

async function runTests() {
    console.log('\n==========================================');
    console.log('Assignment 3: Task Manager - Visible Tests');
    console.log('==========================================\n');

    const baseOptions = {
        hostname: 'localhost',
        port: 3000,
        timeout: 5000
    };

    // Start the server
    console.log('Starting server...\n');
    let server;
    try {
        const app = require('../../server/server');
        server = app.listen(3000);
    } catch (e) {
        console.error('Failed to start server:', e.message);
        console.log('FINAL SCORE: 0 / 100');
        process.exit(1);
    }

    // Wait for server to start
    await new Promise(resolve => setTimeout(resolve, 1000));

    try {
        // ============================================
        // File Structure Tests (10 points)
        // ============================================
        console.log('--- File Structure (10 points) ---');

        await test('server/server.js should exist', async () => {
            const exists = fs.existsSync(path.join(__dirname, '../../server/server.js'));
            assertTrue(exists, 'server.js not found');
        });

        await test('server/routes/tasks.js should exist', async () => {
            const exists = fs.existsSync(path.join(__dirname, '../../server/routes/tasks.js'));
            assertTrue(exists, 'tasks.js routes not found');
        });

        await test('server/controllers/taskController.js should exist', async () => {
            const exists = fs.existsSync(path.join(__dirname, '../../server/controllers/taskController.js'));
            assertTrue(exists, 'taskController.js not found');
        });

        await test('public/index.html should exist', async () => {
            const exists = fs.existsSync(path.join(__dirname, '../../public/index.html'));
            assertTrue(exists, 'index.html not found');
        });

        // ============================================
        // GET /api/tasks Tests (15 points)
        // ============================================
        console.log('\n--- GET /api/tasks (15 points) ---');

        await test('GET /api/tasks should return 200', async () => {
            const res = await makeRequest({ ...baseOptions, path: '/api/tasks', method: 'GET' });
            assertEqual(res.statusCode, 200);
        });

        await test('GET /api/tasks should return success: true', async () => {
            const res = await makeRequest({ ...baseOptions, path: '/api/tasks', method: 'GET' });
            assertEqual(res.body.success, true);
        });

        await test('GET /api/tasks should return tasks array', async () => {
            const res = await makeRequest({ ...baseOptions, path: '/api/tasks', method: 'GET' });
            assertArray(res.body.tasks || res.body.data, 'Should return tasks array');
        });

        // ============================================
        // POST /api/tasks Tests (20 points)
        // ============================================
        console.log('\n--- POST /api/tasks (20 points) ---');

        await test('POST /api/tasks should create a new task', async () => {
            const newTask = {
                title: 'Test Task',
                description: 'This is a test task',
                priority: 'medium'
            };
            const res = await makeRequest({
                ...baseOptions,
                path: '/api/tasks',
                method: 'POST',
                headers: { 'Content-Type': 'application/json' }
            }, newTask);
            assertEqual(res.statusCode, 201);
            assertEqual(res.body.success, true);
            createdTaskId = res.body.task?.id || res.body.data?.id;
        });

        await test('POST /api/tasks should return the created task', async () => {
            const newTask = {
                title: 'Another Task',
                description: 'Another test task'
            };
            const res = await makeRequest({
                ...baseOptions,
                path: '/api/tasks',
                method: 'POST',
                headers: { 'Content-Type': 'application/json' }
            }, newTask);
            const task = res.body.task || res.body.data;
            assertTrue(task.title === 'Another Task', 'Task title should match');
        });

        await test('POST /api/tasks should validate required fields', async () => {
            const res = await makeRequest({
                ...baseOptions,
                path: '/api/tasks',
                method: 'POST',
                headers: { 'Content-Type': 'application/json' }
            }, { description: 'No title' });
            assertEqual(res.statusCode, 400);
            assertEqual(res.body.success, false);
        });

        await test('POST /api/tasks should reject empty title', async () => {
            const res = await makeRequest({
                ...baseOptions,
                path: '/api/tasks',
                method: 'POST',
                headers: { 'Content-Type': 'application/json' }
            }, { title: '', description: 'Empty title' });
            assertEqual(res.statusCode, 400);
        });

        // ============================================
        // GET /api/tasks/:id Tests (15 points)
        // ============================================
        console.log('\n--- GET /api/tasks/:id (15 points) ---');

        await test('GET /api/tasks/:id should return a specific task', async () => {
            // First get all tasks to find a valid ID
            const allRes = await makeRequest({ ...baseOptions, path: '/api/tasks', method: 'GET' });
            const tasks = allRes.body.tasks || allRes.body.data || [];
            if (tasks.length > 0) {
                const taskId = tasks[0].id;
                const res = await makeRequest({ ...baseOptions, path: `/api/tasks/${taskId}`, method: 'GET' });
                assertEqual(res.statusCode, 200);
                assertEqual(res.body.success, true);
            } else {
                throw new Error('No tasks available to test');
            }
        });

        await test('GET /api/tasks/:id should return 404 for non-existent task', async () => {
            const res = await makeRequest({ ...baseOptions, path: '/api/tasks/99999', method: 'GET' });
            assertEqual(res.statusCode, 404);
        });

        // ============================================
        // PUT /api/tasks/:id Tests (15 points)
        // ============================================
        console.log('\n--- PUT /api/tasks/:id (15 points) ---');

        await test('PUT /api/tasks/:id should update a task', async () => {
            // Get a task ID first
            const allRes = await makeRequest({ ...baseOptions, path: '/api/tasks', method: 'GET' });
            const tasks = allRes.body.tasks || allRes.body.data || [];
            if (tasks.length > 0) {
                const taskId = tasks[0].id;
                const res = await makeRequest({
                    ...baseOptions,
                    path: `/api/tasks/${taskId}`,
                    method: 'PUT',
                    headers: { 'Content-Type': 'application/json' }
                }, { title: 'Updated Task', completed: true });
                assertEqual(res.statusCode, 200);
                assertEqual(res.body.success, true);
            } else {
                throw new Error('No tasks available to test');
            }
        });

        await test('PUT /api/tasks/:id should return 404 for non-existent task', async () => {
            const res = await makeRequest({
                ...baseOptions,
                path: '/api/tasks/99999',
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' }
            }, { title: 'Update Non-existent' });
            assertEqual(res.statusCode, 404);
        });

        // ============================================
        // DELETE /api/tasks/:id Tests (15 points)
        // ============================================
        console.log('\n--- DELETE /api/tasks/:id (15 points) ---');

        await test('DELETE /api/tasks/:id should delete a task', async () => {
            // Create a task to delete
            const createRes = await makeRequest({
                ...baseOptions,
                path: '/api/tasks',
                method: 'POST',
                headers: { 'Content-Type': 'application/json' }
            }, { title: 'Task to Delete', description: 'This will be deleted' });

            const taskId = createRes.body.task?.id || createRes.body.data?.id;
            if (taskId) {
                const res = await makeRequest({
                    ...baseOptions,
                    path: `/api/tasks/${taskId}`,
                    method: 'DELETE'
                });
                assertEqual(res.statusCode, 200);
                assertEqual(res.body.success, true);
            } else {
                throw new Error('Could not create task to delete');
            }
        });

        await test('DELETE /api/tasks/:id should return 404 for non-existent task', async () => {
            const res = await makeRequest({
                ...baseOptions,
                path: '/api/tasks/99999',
                method: 'DELETE'
            });
            assertEqual(res.statusCode, 404);
        });

        // ============================================
        // Error Handling Tests (10 points)
        // ============================================
        console.log('\n--- Error Handling (10 points) ---');

        await test('Undefined route should return 404', async () => {
            const res = await makeRequest({ ...baseOptions, path: '/api/undefined', method: 'GET' });
            assertEqual(res.statusCode, 404);
        });

        await test('Response should include success field', async () => {
            const res = await makeRequest({ ...baseOptions, path: '/api/tasks', method: 'GET' });
            assertTrue(res.body.success !== undefined, 'Response should include success field');
        });

    } finally {
        // Close the server
        if (server) {
            server.close();
        }
    }

    // Summary
    console.log('\n==========================================');
    console.log(`Results: ${passed} passed, ${failed} failed`);
    const score = Math.round((passed / (passed + failed)) * 100);
    console.log(`Score: ${score}%`);
    console.log('==========================================\n');

    console.log('Note: This is your visible test score (40% of final grade).');
    console.log('Make sure all tests pass before pushing to GitHub.\n');

    if (failed > 0) {
        process.exit(1);
    }
}

runTests().catch(err => {
    console.error('Test runner error:', err);
    process.exit(1);
});
