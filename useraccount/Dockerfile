FROM node:10

WORKDIR /usr/src/app

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json ./

RUN npm install

# Building code for production
RUN npm ci --only=production

COPY . .

EXPOSE 3000
CMD [ "node", "dist/app.js" ]

# Refer https://nodejs.org/fr/docs/guides/nodejs-docker-webapp/