#!/bin/bash

# Define the URL
URL="http://localhost:3001/api/documentation"

# Send 5 POST requests with different dummy data
for i in {1..5}
do
  DATA='{
    "title": "Sample Title '$i'",
    "user_name": "dummy_user_'$i'",
    "description": "<div>This is sample description number '$i'</div>"
  }'

  # Send POST request with JSON body
  curl -X POST -H "Content-Type: application/json" -d "$DATA" "$URL"
  echo "Request $i sent"
done
