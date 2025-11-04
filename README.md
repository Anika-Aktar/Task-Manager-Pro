# Task-Manager-Pro

## Project Overview
This is a simple Task Manager REST API built with **Node.js** and **Express**.  
It allows you to fetch tasks, check server health, and retrieve individual tasks by ID.


## Setup & Run

1. **Clone the repository**

git clone https://github.com/Anika-Aktar/Task-Manager-Pro.git
cd C:\Users\USER\Documents\Three_Two\weblabtwo\task-management


#API Endpoints
1. GET /
Returns Task Management API is Running.

2. GET /tasks
Returns an array of 5 tasks with the following fields:
id (number)
title (string)
completed (boolean)
priority (low/medium/high)
createdAt (JavaScript Date object)

3. GET /task/:id
Returns a single task by ID.

Errors:
400 { "error": "Invalid ID format" } → if ID is not a number.
404 { "error": "Task not found" } → if task with given ID does not exist.

4. GET /health
Returns server health and uptime.