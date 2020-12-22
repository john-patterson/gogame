#!/bin/bash

docker build -t server .
docker run -it -p 8080:8080 server
