#!/usr/bin/env bash
set -ex

cd "$( dirname "${BASH_SOURCE[0]}" )"

docker-compose -f docker-compose.yml build  $service-build
docker-compose -f docker-compose.yml run --rm  $service-build
