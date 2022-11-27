#!/bin/bash
docker build -t twicket .
docker run -it  --rm  -v ${PWD}:/app  -v /app/node_modules  -p 3001:3000 \
    -e CHOKIDAR_USEPOLLING=true twicket
