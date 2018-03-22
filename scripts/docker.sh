#! /bin/bash

echo "Starting fullstack resume"

docker build \
  -t "fullstack-resume" \
  -f Dockerfile .

docker run \
  -e "NODE_ENV=production" \
  --env-file ".env" \
  -m "500M" --memory-swap "1G" \
  -p "3000:3000" \
  fullstack-resume
