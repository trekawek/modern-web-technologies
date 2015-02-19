FROM nodesource/node:wheezy

ADD * /app/

WORKDIR /app
ENV redis_host=redis
RUN npm install

EXPOSE 3000
CMD ["npm", "start"]
