FROM node:carbon  AS fullstack-resume-frontend
WORKDIR /usr/projects/fullstack-resume-frontend

COPY package*.json ./
RUN npm install

COPY . .

EXPOSE 3000
CMD [ "npm", "start" ]
USER node
