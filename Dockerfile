FROM node:18-alpine
RUN mkdir -p /home/node/app/back-end/node_modules && chown -R node:node /home/node/app/back-end
WORKDIR /home/node/app
COPY . .
WORKDIR /home/node/app/back-end
RUN npm install
COPY --chown=node:node . .
EXPOSE 3000
USER node
CMD [ "node", "app.js" ]
