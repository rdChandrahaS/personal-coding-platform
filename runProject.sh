#!/bin/bash

PROJECT_ROOT=$(pwd)

# --- 1. Define the Cleanup Function ---
cleanup() {
    echo -e "\n🛑 Shutting down Personal DSA Platform..."
    
    echo "🧹 Stopping Docker containers..."
    docker compose down
    
    echo "🔌 Terminating Spring Boot and Vite processes..."
    # fuser forcefully kills whatever is running on these specific ports
    fuser -k 8080/tcp 8081/tcp 8082/tcp 5173/tcp >/dev/null 2>&1
    
    echo "✅ Cleanup complete. Goodbye!"
    exit 0
}

# --- 2. Trap CTRL+C to trigger the cleanup ---
trap cleanup SIGINT SIGTERM

echo "========================================"
echo "🚀 Starting Personal DSA Platform..."
echo "========================================"

echo "📦 1/3: Starting Docker Infrastructure (MongoDB & Redis)..."
docker compose up -d
docker compose --profile build-runner up --build -d

echo "⚙️  2/3: Booting Microservices..."

echo "   -> Starting Problem Service (Port 8081)..."
gnome-terminal --title="Problem Service (8081)" -- bash -c "cd '$PROJECT_ROOT/services/problemmanagement' && ./gradlew bootRun; exec bash"

echo "⏳ Waiting for Problem Service to accept connections..."
while ! curl -s --output /dev/null http://localhost:8081/api/problems; do
    sleep 2
done
echo "✅ Problem Service is online!"

echo "   -> Starting Execution Service (Port 8082)..."
gnome-terminal --title="Execution Service (8082)" -- bash -c "cd '$PROJECT_ROOT/services/execution' && ./gradlew bootRun; exec bash"

echo "   -> Starting API Gateway (Port 8080)..."
gnome-terminal --title="API Gateway (8080)" -- bash -c "cd '$PROJECT_ROOT/services/apigateway' && ./gradlew bootRun; exec bash"

echo "⏳ Waiting for API Gateway to accept connections..."
while ! nc -z localhost 8080; do   
  sleep 1
done
echo "✅ API Gateway is online!"

echo "💻 3/3: Booting React Frontend..."
gnome-terminal --title="React Frontend" -- bash -c "cd '$PROJECT_ROOT/frontend' && npm run dev; exec bash"

echo "========================================"
echo "🎉 All services are successfully running!"
echo "👉 Open http://localhost:5173 to start coding."
echo "========================================"

# --- 3. Keep script alive to listen for CTRL+C ---
echo "⚠️  Press [CTRL+C] in this terminal to safely shut down everything."
while true; do
    sleep 86400
done
