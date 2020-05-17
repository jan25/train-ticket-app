#!/bin/bash

set -xe

docker build --tag username:latest .

kubectl apply -f k8s/
