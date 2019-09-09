FROM node

WORKDIR /app

COPY . /app

RUN npm i

ENV CHOKIDAR_USEPOLLING true

CMD ["npm","start"]