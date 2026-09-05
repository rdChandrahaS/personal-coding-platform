# Personal DSA Platform

A local-first LeetCode / GeeksForGeeks-style DSA notebook and code practice platform.

## Stack

- Frontend: React + TypeScript + Vite + Monaco Editor
- Backend: Spring Boot 3 + JPA
- Database: PostgreSQL
- Code execution: Docker-based runner for Python, Java, C, and C++

## Features in this MVP

- Create, edit, delete and browse problems
- Markdown-based problem description, intuition, approach and complexity
- Store a solution per language
- Monaco editor for practice
- Run code against custom stdin
- Submit code against saved test cases
- Study mode with collapsible intuition / approach / solution
- Local PostgreSQL via Docker Compose

## Quick start

### 1. Start PostgreSQL

```bash
docker compose up -d db
```

### 2. Start the backend

```bash
cd backend
./mvnw spring-boot:run
```

The API runs on `http://localhost:8080`.

### 3. Start the frontend

```bash
cd frontend
npm install
npm run dev
```

Open the URL shown by Vite, normally `http://localhost:5173`.

### 4. Code execution runner

The backend expects Docker to be installed and available on the host. It launches a short-lived container with no network, CPU/memory limits and a timeout.

The runner image is built with:

```bash
docker build -t personal-dsa-runner ./runner
```

If Docker is not available, the UI will still work for problem management, but Run/Submit will return a clear execution error.

## Project structure

```text
personal-dsa-platform/
├── backend/
├── frontend/
├── runner/
├── docker-compose.yml
└── README.md
```
