FROM node:15.6.0-alpine

WORKDIR /app

COPY ./package*.json ./

RUN npm install --production

COPY . .

CMD ["node", "lib/package1.js"]