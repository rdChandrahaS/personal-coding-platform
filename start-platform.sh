#!/bin/bash

# Get the current directory
PROJECT_ROOT=$(pwd)

echo "========================================"
echo "Starting Personal DSA Platform..."
echo "========================================"

echo "1/3: Starting Docker Infrastructure (MongoDB & Redis)..."
docker compose up -d
docker compose --profile build-runner up --build -d

echo "2/3: Booting Microservices..."

# 1. Start Problem Management
echo "   -> Starting Problem Service (Port 8081)..."
gnome-terminal --title="Problem Service (8081)" -- bash -c "cd '$PROJECT_ROOT/services/problemmanagement' && ./gradlew bootRun; exec bash"

# 2. Polling loop: Wait dynamically for the Problem Service to be ready
echo "Waiting for Problem Service to accept connections..."
while ! curl -s --output /dev/null http://localhost:8081/api/problems; do
    sleep 2
done
echo "Problem Service is online!"

# 3. Start Execution Service
echo "   -> Starting Execution Service (Port 8082)..."
gnome-terminal --title="Execution Service (8082)" -- bash -c "cd '$PROJECT_ROOT/services/execution' && ./gradlew bootRun; exec bash"

# 4. Start API Gateway
echo "   -> Starting API Gateway (Port 8080)..."
gnome-terminal --title="API Gateway (8080)" -- bash -c "cd '$PROJECT_ROOT/services/apigateway' && ./gradlew bootRun; exec bash"

# Optional: Wait for API Gateway to be ready before starting the frontend
echo "⏳ Waiting for API Gateway to accept connections..."
while ! nc -z localhost 8080; do   
  sleep 1
done
echo "API Gateway is online!"

echo "3/3: Booting React Frontend..."

# Start Frontend
gnome-terminal --title="React Frontend" -- bash -c "cd '$PROJECT_ROOT/frontend' && npm run dev; exec bash"

echo "========================================"
echo "All services are successfully running!"
echo "Open http://localhost:5173 to start coding."
echo "========================================"
