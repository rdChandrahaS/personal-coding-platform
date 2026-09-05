#!/bin/bash

BACKUP_DIR="db-backup"

if [ ! -d "$BACKUP_DIR" ]; then
  echo "❌ Backup directory not found!"
  exit 1
fi

echo "📥 Importing collections into MongoDB..."

# Import Problems
cat $BACKUP_DIR/problems.json | docker exec -i dsa-mongodb mongoimport --db=dsa_platform --collection=problems --jsonArray --drop

# Import Solutions
cat $BACKUP_DIR/solutions.json | docker exec -i dsa-mongodb mongoimport --db=dsa_platform --collection=solutions --jsonArray --drop

# Import Test Cases
cat $BACKUP_DIR/test_cases.json | docker exec -i dsa-mongodb mongoimport --db=dsa_platform --collection=test_cases --jsonArray --drop

echo "✅ Restore complete!"
