# Use an official Node.js runtime as the base image
FROM node:14

# Set the working directory in the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json to the container
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code to the container
COPY . .

# Build the TypeScript code
RUN npm run build

# Expose the port your Node.js application listens on (if any)
ENV PORT 3333
EXPOSE $PORT

# Start the application with nodemon
CMD ["npm", "run", "dev"]
