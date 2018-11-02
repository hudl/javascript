#!/usr/bin/env bash
set -ex

cd "$( dirname "${BASH_SOURCE[0]}" )"

export HudlCiToolsTagName=1.3.0
export npmRegistryUrl="http://npm-pull.hudltools.com/"
export teamcityBuildBranch="branch-name"
export buildNumber="1234"
export teamCityNpmPassword="hello"
export teamCityNpmAuthToken="world"
export service="eslint-config-hudl"

 ./teamcity-build.sh
