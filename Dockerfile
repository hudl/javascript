FROM node:10.12.0

ARG HudlCiToolsTagName
ARG npmRegistryUrl
ARG teamcityBuildBranch
ARG buildNumber
ARG npmPackageDir
ARG teamCityNpmPassword
ARG teamCityNpmAuthToken

RUN npm i -g hudl-ci-tools@${HudlCiToolsTagName} --registry=${npmRegistryUrl}

# install yarn 1.11.1
RUN curl -o- -L https://yarnpkg.com/install.sh | bash -s -- --version 1.11.1


RUN yarn config set registry "${npmRegistryUrl}"

ENTRYPOINT [ "/bin/bash", "/app/ci/run.sh" ]

ENV HudlCiToolsTagName="${HudlCiToolsTagName}"
ENV npmRegistryUrl="${npmRegistryUrl}"
ENV teamcityBuildBranch="${teamcityBuildBranch}"
ENV buildNumber="${buildNumber}"
ENV teamCityNpmPassword="${teamCityNpmPassword}"
ENV teamCityNpmAuthToken="${teamCityNpmAuthToken}"

WORKDIR /app
