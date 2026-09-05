#!/bin/bash

for service in apigateway problemmanagement execution;
do
	echo "------------------------------------------------"
	echo "Building and Starting $service"
	echo "------------------------------------------------"
	(cd $service && ./gradlew clean build -x test && ./gradlew bootRun) &
done

echo "------------------------------------------------"
echo "All services are starting up in the background..."
echo "Press [CTRL+C] to stop all of them."
echo "------------------------------------------------"

wait
