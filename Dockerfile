FROM node:18-alpine AS builder

RUN mkdir /app && mkdir /app/data

COPY . /app

RUN cd /app && npm ci && npm run build

CMD ["node", "build/index.js"]
