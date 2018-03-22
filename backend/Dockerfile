FROM node:carbon AS fullstack-resume:backend
WORKDIR /usr/projects/fullstack-resume-backend

COPY package*.json ./
RUN npm install

COPY . .

EXPOSE 3001
CMD [ "npm", "start" ]
USER node
