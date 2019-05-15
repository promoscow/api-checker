FROM node:alpine
LABEL maintainer="2262288@gmail.com"
WORKDIR /usr/app/front
COPY ./ ./

RUN npm install
CMD ["npm", "start"]