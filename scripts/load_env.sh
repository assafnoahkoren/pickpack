#!/bin/bash

echo "Starting environment variable loading script..."

# Get the absolute path of the directory containing this script
# $0 is the script name, dirname gets its directory, cd makes it absolute path
SCRIPT_DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"
echo "Script directory: $SCRIPT_DIR"

# Check if the .env file exists in the parent directory
echo "Checking for .env file..."
if [ -f "$SCRIPT_DIR/../.env" ]; then
    echo "Found .env file at $SCRIPT_DIR/../.env"
    
    # set -a: Automatically export all variables assigned to
    echo "Setting auto-export mode..."
    set -a
    
    # Source the .env file - this reads and sets all environment variables
    echo "Loading environment variables..."
    source "$SCRIPT_DIR/../.env"
    
    # set +a: Turn off auto-export
    echo "Turning off auto-export mode..."
    set +a
    
    # Provide feedback that the operation was successful
    echo "Environment variables loaded successfully from ../.env"
else
    # If .env file doesn't exist, show error and exit with failure code
    echo "Error: ../.env file not found"
    exit 1
fi
