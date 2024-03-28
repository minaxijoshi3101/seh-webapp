#Block 1 - Build docker image for react app
FROM node:16-alpine as build-stage
WORKDIR /seh-webapp
#RUN addgroup app && adduser -S -G app app && chown -R app /seh-webapp
COPY package*.json ./
#RUN NODE_ENV=development npm i > npm-install.log 2>&1
RUN npm i
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