# Base image
FROM node:16 as build

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code to the working directory
COPY . .
# Build the application
RUN npm run build -- --configuration production

# Use NGINX as the base image for serving the application
FROM nginx:1.21.0-alpine

# Copy the build artifacts from the build stage to the NGINX root directory
COPY --from=build /app/dist/price-parameter-client /usr/share/nginx/html

# Copy the NGINX configuration file to the appropriate directory
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Expose port 80 to the outside world
EXPOSE 80

# Start NGINX when the container starts
CMD ["nginx", "-g", "daemon off;"]
