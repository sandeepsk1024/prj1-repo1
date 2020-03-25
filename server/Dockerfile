FROM node:lts-alpine
WORKDIR /usr/src/app
COPY package*.json ./
RUN apk --no-cache --virtual build-dependencies add \
    python \
    make \
    g++ \
    && npm install \
    && apk del build-dependencies
COPY . .
EXPOSE 8080
CMD ["npm", "start"]