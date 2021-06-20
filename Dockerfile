FROM node:14.15.0-alpine
WORKDIR /app
COPY package.json .
RUN yarn
COPY . .

EXPOSE 3333
CMD ["yarn", "dev"]