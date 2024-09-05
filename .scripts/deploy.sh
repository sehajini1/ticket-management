#!/bin/bash
set -e

echo "Deployment started ..."

# Pull the latest version of the app
sudo git pull

# Install npm packages
sudo npm i

# Run build
sudo npm run build

echo "Deployment finished!"
