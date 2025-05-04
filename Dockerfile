FROM node:21-alpine

WORKDIR /app
COPY ./package.json ./package.json
COPY ./index.js ./index.js
RUN npm install
CMD ["node","index.js"]