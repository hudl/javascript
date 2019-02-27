FROM node:10.15.0

ARG HudlCiToolsTagName
ARG npmRegistryUrl
ARG teamcityBuildBranch
ARG buildNumber
ARG npmPackageDir
ARG teamCityNpmPassword
ARG teamCityNpmAuthToken

# The 10.15.0 image includes Yarn 1.13.0
RUN yarn config set registry "${npmRegistryUrl}"
RUN yarn global add hudl-ci-tools@${HudlCiToolsTagName}

ENTRYPOINT [ "/bin/bash", "/app/ci/run.sh" ]

ENV teamcityBuildBranch="${teamcityBuildBranch}"
ENV buildNumber="${buildNumber}"
ENV teamCityNpmPassword="${teamCityNpmPassword}"
ENV teamCityNpmAuthToken="${teamCityNpmAuthToken}"

WORKDIR /app
