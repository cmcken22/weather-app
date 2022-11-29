# FROM node:12.14.0-alpine as BUILD

# # Add dependencies
# # RUN apk add curl bash --no-cache

# # Install node-prune
# # RUN curl -sfL https://install.goreleaser.com/github.com/tj/node-prune.sh | bash -s -- -b /usr/local/bin

# # RUN mkdir ~build
# WORKDIR /usr/src/build

# COPY .. ./
# # RUN ls -la
# # COPY package.json ./
# # # COPY .dockerignore ./
# # COPY public ./public
# # COPY webpack.config.js ./

# RUN npm install
# # RUN [ "npm", "run", "start:prod" ]

# COPY . /usr/src/build

# RUN ls -la
# RUN ls -la public

# # after the build is complete, let's prune the node_modules
# RUN npm prune --production && node-prune

# FROM node:12.14.0-alpine as FINAL
FROM node:19-alpine3.15 as FINAL

COPY . ./
RUN npm install

ARG environment
ENV environment=${environment}
ENV PORT=8080

# WORKDIR /usr/src/app
# COPY --from=BUILD /usr/src/build /usr/src/app
# RUN ls -la
# RUN ls -la public

EXPOSE $PORT

CMD [ "npm", "run", "server" ]
