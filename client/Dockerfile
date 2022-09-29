FROM node:14.18.0-alpine as build

WORKDIR /app

COPY package.json .

COPY package-lock.json .

RUN npm ci

COPY . .

RUN npm run build

CMD ["npm", "run", "serve"]

#FROM nginx:stable-alpine

#COPY --from=build /app/client/dist /usr/share/nginx/html

#RUN mkdir /usr/share/nginx/html/client

#COPY --from=build /app/client/dist /usr/share/nginx/html/client

#COPY default.conf /etc/nginx/conf.d/default.conf:ro

#CMD ["nginx", "-g", "daemon off;"]

