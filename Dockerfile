################################################
################  Dockerfile   #################
################################################
# This file has all the necessary settings to create a Docker image.

# The FROM instruction specifies the Parent Image from which you are building. 
FROM node:18-alpine3.15

# The WORKDIR command is used to define the working directory of a Docker container at any given time.
# Any RUN, CMD, ADD, COPY, or ENTRYPOINT command will be executed in the specified working directory.
# Hence, it can be said that the command performs mkdir and cd implicitly.
# We are creating a directory to hold the application code inside the image.
WORKDIR /usr/src/app

# COPY command allows to access files from host and copy them into our container.
# RUN command allows to execute Linux instructions.
# Rather than copying the entire working directory, we are only copying the package.json file. 
# This allows us to take advantage of cached Docker layers.
# A wildcard is used to ensure both package.json AND package-lock.json are copied.
# Parent image comes with Node.js and NPM already installed so the next thing we need to do is to install 
# the app dependencies using the npm binary.
COPY package*.json ./
RUN npm install

# To bundle app's source code inside the Docker image, COPY instruction is used again.
# Consider that we are avoiding to copy the node_modules from host with .dockerignore file.
# This will prevent local modules and debug logs from being copied onto your Docker image and 
# possibly overwriting modules installed within the image.
COPY . .

# App binds to port 8080 so EXPOSE instruction is used to have it mapped by the docker daemon.
# It refers to container's port.
EXPOSE 8500

# In the end, we indicate the command to run our app with CMD instruction.
CMD [ "npm", "run", "dev-start" ]