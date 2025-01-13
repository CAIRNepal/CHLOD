# Use Node.js 18 Alpine as the base image
FROM node:18-alpine

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Build the application
RUN npm run build

# Install `serve` globally to serve the build files
RUN npm install -g serve

# Expose the port your app runs on (default for `serve` is 3000)
EXPOSE 3000

# Serve the build files
CMD ["serve", "-s", "build", "-l", "3000"]