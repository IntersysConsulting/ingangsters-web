FROM node:10.16-alpine

WORKDIR /app

COPY . /app

ENV PORT=8080

RUN npm install

RUN ls -a

RUN npm run build

EXPOSE 8080

CMD ["npx", "serve", "-s", "build"]