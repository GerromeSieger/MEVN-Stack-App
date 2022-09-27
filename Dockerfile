FROM node:14.18.0-alpine

WORKDIR /app

COPY package.json .

COPY package-lock.json .

RUN npm ci

RUN npm install -g dotenv

RUN npm install -g nodemon

COPY . .

EXPOSE 3000
