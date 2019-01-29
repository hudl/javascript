#!/usr/bin/env bash
set -exuo pipefail

cp -r /app /app-copy
cd /app-copy/packages/eslint-config-hudl
hudl-ci build --branch=${teamcityBuildBranch} --buildNumber=${buildNumber} --packageDir=/app-copy/packages/eslint-config-hudl --teamCityNpmPassword=${teamCityNpmPassword} --teamCityNpmAuthToken=${teamCityNpmAuthToken}
