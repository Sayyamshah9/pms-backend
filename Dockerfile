FROM node:18

COPY package.json /app/
COPY src /app/

WORKDIR /app

RUN yarn install

CMD ["node", "server.js"]