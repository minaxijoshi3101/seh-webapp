#Block 1 - Build docker image for react app
FROM node:21.7.1-slim as build-stage
WORKDIR /seh-webapp
COPY package.json .
RUN npm install
COPY . .
EXPOSE 8080
USER root
RUN npm run build
#RUN npm start

#Block 2 -  Deploy app in nginx
FROM nginx:alpine
#for dynamic app
#COPY ./default.conf /etc/nginx/conf.d
WORKDIR /usr/share/nginx/html
RUN rm -rf ./*
COPY --from=build-stage /seh-webapp/build .
ENTRYPOINT ["nginx","-g","daemon off;"]