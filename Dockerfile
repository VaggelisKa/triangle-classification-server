FROM node:alpine as base

WORKDIR /src/app
COPY package.json .
RUN npm i
COPY . .

CMD ["npm", "start"]