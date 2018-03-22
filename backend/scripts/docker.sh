#! /bin/bash

echo "Starting fullstack resume backend"

docker build \
  -t "fullstack-resume-backend" \
  -f Dockerfile .

docker run \
  -e "NODE_ENV=production" \
  -e "DEBUG=backend:*" \
  --env-file ".env" \
  -m "500M" --memory-swap "1G" \
  -p "3000:3000" \
  fullstack-resume-backend
