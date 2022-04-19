
FROM node:16-alpine

RUN npm install -g http-server

WORKDIR /code .

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run serve

EXPOSE 8080
CMD [ "http-server", "dist" ]