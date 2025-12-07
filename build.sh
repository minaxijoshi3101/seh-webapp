#!/bin/bash
set -e

ART_URL="https://trialcpnyac.jfrog.io/artifactory"

REPO="SEH"
ART_USER="amitajoshi1992@gmail.com"
ART_API_KEY=$1

npm install

npm run build

tar -czf  seh-webapp.tgz build/

app_name=$(jq -r '.name' package.json)

version=$(jq -r '.version' package.json)


echo "app_name: $app_name"
echo "version: $version"


curl -u ${ART_USER}:${ART_API_KEY} -T seh-webapp.tgz "${ART_URL}/${REPO}/${app_name}/release/${version}/seh-webapp.tgz"

curl -u ${ART_USER}:${ART_API_KEY} -T deployment_manifest.zip "${ART_URL}/${REPO}/${app_name}/release/${version}/deployment_manifest.zip"

echo "Artifact and deployment manifest uploaded successfully."