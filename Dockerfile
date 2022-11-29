FROM node:19-alpine3.15 as FINAL

COPY . ./
RUN npm install

ARG environment
ENV environment=${environment}
ENV PORT=8080

EXPOSE $PORT
CMD [ "npm", "run", "server" ]
