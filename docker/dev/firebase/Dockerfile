# FROM node:16

# RUN apt-get update -y
# RUN ( \
#   apt-get install -y --no-install-recommends \
#     curl \
#     openjdk-11-jre-headless \
# )
# RUN npm install -g firebase-tools
# COPY . /opt/workspace/
FROM node:20
RUN npm install -g firebase-tools@13.0.1
COPY . /opt/workspace/