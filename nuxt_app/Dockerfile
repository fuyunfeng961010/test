FROM node:12
COPY . /opt/docker_app/nuxt
WORKDIR /opt/docker_app/nuxt
EXPOSE 4877
#If the environment in China build please open the following comments
#如果在中国环境下构建请把下面注释打开
#RUN npm config set registry https://registry.npm.taobao.org
RUN npm install
RUN npm run build
CMD ["npm", "start"]
