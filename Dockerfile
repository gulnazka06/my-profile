FROM node:alpine

# Create app directory
RUN mkdir -p /root/frontend
WORKDIR /root/frontend

ENV HOST 0.0.0.0
EXPOSE 4204

COPY . /root/frontend

RUN npm install

RUN npm run build

# start command
CMD [ "npm", "start" ]
