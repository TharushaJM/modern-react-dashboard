#base image
FROM node:20-alpine

#set working dir
WORKDIR /app

#copy the package.jason and package-lock.jason files
COPY package*.json ./

#install the deoendencies
RUN npm install

#Copy the rest of application
COPY . .

# Expose the port app will run
EXPOSE 5173


#start the application
CMD ["npm" , "run" , "dev" ]