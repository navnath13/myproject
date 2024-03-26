FROM node:v16.14.2
WORKDIR /myproject
RUN npm install
RUN  npm run build --prod
CMD [ "npm","strat" ]