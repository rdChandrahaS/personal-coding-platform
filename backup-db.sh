#!/bin/bash

BACKUP_DIR="db-backup"
mkdir -p $BACKUP_DIR

echo "📦 Exporting collections from MongoDB..."

# Export Problems
docker exec dsa-mongodb mongoexport --db=dsa_platform --collection=problems --jsonArray --pretty > $BACKUP_DIR/problems.json

# Export Solutions
docker exec dsa-mongodb mongoexport --db=dsa_platform --collection=solutions --jsonArray --pretty > $BACKUP_DIR/solutions.json

# Export Test Cases
docker exec dsa-mongodb mongoexport --db=dsa_platform --collection=test_cases --jsonArray --pretty > $BACKUP_DIR/test_cases.json

echo "✅ Backup complete! Files saved to ./$BACKUP_DIR"
