FROM node:latest
WORKDIR /opt/rtb
COPY package.json .
EXPOSE 3333 2992

RUN apt-get update && apt-get install -y locales \
    dialog \
    apt-utils \
    build-essential \
    unzip \
    jq \
    git \
    findutils \
    curl \
    wget \
    vim \
    net-tools