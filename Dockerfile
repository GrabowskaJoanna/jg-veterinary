FROM node:18-alpine
WORKDIR /jg-veterinary
COPY package*.json ./
RUN npm install
COPY . .
CMD ["npm", "start"]
