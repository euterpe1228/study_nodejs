FROM node:18-alpine

workdir /app

copy package.json package-lock.json ./

RUN npm ci

COPY index.js ./

ENTRYPOINT [ "node", "index.js" ]