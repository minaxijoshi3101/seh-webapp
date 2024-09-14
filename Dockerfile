FROM node:18-alpine

# Set environment variable for Node.js
ENV NODE_OPTIONS=--openssl-legacy-provider

# Create and set working directory
RUN mkdir -p /datadisk/nodejs/seh-webapp
WORKDIR /datadisk/nodejs/seh-webapp/

# Copy package.json and install dependencies
COPY package.json .
RUN npm install

# Copy remaining files
COPY build . .

# Expose port and set command
EXPOSE 3000
CMD ["npm", "start"]