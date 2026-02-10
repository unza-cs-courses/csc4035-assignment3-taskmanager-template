# Assignment 3: Task Management Application

**Course:** CSC4035 Web Programming and Technologies
**Weight:** 5% of final grade
**Due:** Week 12, Friday 11:59 PM

---

## Overview

Build a complete full-stack task management application with a Node.js/Express backend API and a vanilla JavaScript frontend. This assignment integrates all skills from the course: HTML/CSS for structure and styling, JavaScript for interactivity, and Node.js/Express for server-side API development.

**Important:** No frontend frameworks (React, Vue, etc.) allowed. Backend must use Express.js.

---

## Requirements

### Backend Requirements (API)

| Method | Endpoint | Description | Request Body | Response |
|--------|----------|-------------|--------------|----------|
| GET | `/api/tasks` | Get all tasks | - | Array of tasks |
| GET | `/api/tasks/:id` | Get single task | - | Task object |
| POST | `/api/tasks` | Create task | `{title, description, priority}` | Created task |
| PUT | `/api/tasks/:id` | Update task | `{title, description, priority, completed}` | Updated task |
| DELETE | `/api/tasks/:id` | Delete task | - | Success message |

### Task Object Structure

```json
{
    "id": 1,
    "title": "Complete Assignment 3",
    "description": "Build full-stack application",
    "priority": "high",
    "completed": false,
    "createdAt": "2025-01-15T10:30:00.000Z"
}
```

### Frontend Requirements

| Feature | Description |
|---------|-------------|
| **Task List** | Display all tasks with title, priority, and status |
| **Add Task** | Form to create new tasks with validation |
| **Edit Task** | Modify existing tasks |
| **Delete Task** | Remove tasks with confirmation |
| **Mark Complete** | Toggle task completion status |
| **Filter Tasks** | Filter by status (All/Active/Completed) |
| **Search** | Search tasks by title |

### Technical Requirements

**Backend:**
- Express.js framework
- JSON file for data persistence
- Input validation middleware
- Proper HTTP status codes (200, 201, 400, 404, 500)
- Error handling middleware
- CORS configuration

**Frontend:**
- Fetch API for all HTTP requests
- Dynamic DOM manipulation
- Loading states during API calls
- Error messages for failed operations
- Responsive design

---

## Project Structure

```
csc4035-assignment3-taskmanager/
├── server/
│   ├── server.js           # Main server file
│   ├── routes/
│   │   └── tasks.js        # Task routes
│   ├── controllers/
│   │   └── taskController.js # Task logic
│   ├── models/
│   │   └── Task.js         # Task model
│   ├── middleware/
│   │   └── validation.js   # Input validation
│   └── data/
│       └── tasks.json      # Data storage
├── public/
│   ├── index.html          # Main HTML
│   ├── css/
│   │   └── styles.css      # Styling
│   └── js/
│       ├── app.js          # Main app logic
│       ├── api.js          # API functions
│       └── ui.js           # UI functions
├── tests/
│   └── visible/
│       └── tests.js        # Automated tests
├── package.json
└── README.md
```

---

## Getting Started

### Installation

```bash
# Clone the repository
git clone <your-repo-url>

# Navigate to directory
cd csc4035-assignment3-taskmanager

# Install dependencies
npm install

# Start the server
npm start

# Open in browser
# http://localhost:3000
```

### Development

```bash
# Run with auto-reload (if nodemon installed)
npm run dev

# Run tests
npm test
```

---

## API Documentation

### Get All Tasks

```http
GET /api/tasks
```

**Response:** `200 OK`
```json
[
    {
        "id": 1,
        "title": "Example Task",
        "description": "Task description",
        "priority": "high",
        "completed": false,
        "createdAt": "2025-01-15T10:30:00.000Z"
    }
]
```

### Get Single Task

```http
GET /api/tasks/:id
```

**Response:** `200 OK` or `404 Not Found`

### Create Task

```http
POST /api/tasks
Content-Type: application/json

{
    "title": "New Task",
    "description": "Task description",
    "priority": "medium"
}
```

**Response:** `201 Created`

### Update Task

```http
PUT /api/tasks/:id
Content-Type: application/json

{
    "title": "Updated Task",
    "completed": true
}
```

**Response:** `200 OK` or `404 Not Found`

### Delete Task

```http
DELETE /api/tasks/:id
```

**Response:** `200 OK` or `404 Not Found`

---

## Grading Rubric (100 points)

| Criterion | Points | Description |
|-----------|--------|-------------|
| **API Implementation** | 30 | All endpoints working with proper status codes |
| **Frontend-Backend Integration** | 25 | Seamless API communication |
| **UI/UX Quality** | 15 | Professional, intuitive interface |
| **CRUD Operations** | 15 | All operations work correctly |
| **Code Quality** | 10 | Clean, organized, well-structured |
| **Error Handling** | 5 | Proper error handling throughout |

### Automated Tests (40% of grade)

- Server starts successfully
- All API endpoints respond correctly
- CRUD operations work
- Error handling works

---

## Submission Checklist

Before submitting, verify:

- [ ] Server starts with `npm start`
- [ ] All 5 API endpoints work correctly
- [ ] Can create, read, update, delete tasks
- [ ] Frontend displays tasks from API
- [ ] Can add new tasks via form
- [ ] Can edit existing tasks
- [ ] Can delete tasks
- [ ] Can mark tasks as complete
- [ ] Filter functionality works
- [ ] Search functionality works
- [ ] Error handling implemented
- [ ] All tests pass (`npm test`)

---

## Academic Integrity

- All code must be your own work
- No Express generators (express-generator)
- No frontend frameworks (React, Vue, Angular)
- API patterns from labs may be adapted

**Violations result in zero marks and academic misconduct reporting.**
