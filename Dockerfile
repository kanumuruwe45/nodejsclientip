FROM node:12.18.1
WORKDIR /app
COPY . .
RUN npm install express
RUN npm install express-device
EXPOSE 3000
CMD [ "node", "app.js" ]