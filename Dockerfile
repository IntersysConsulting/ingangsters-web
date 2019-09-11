FROM node:10.16-alpine

WORKDIR /app

COPY . /app

RUN npm i

RUN source .env

ENV CHOKIDAR_USEPOLLING true

CMD ["npm","start"]