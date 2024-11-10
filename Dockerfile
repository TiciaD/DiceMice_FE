# Production Dockerfile for Angular
# Stage 1: Build the Angular app
FROM node:18 AS build

WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build --prod

# Stage 2: Serve the Angular app using Nginx
FROM nginx:latest

COPY --from=build /app/dist/Dice-Mice /usr/share/nginx/html
COPY nginx.conf /etc/nginx/nginx.conf

# Expose Nginx port
EXPOSE 80

# Run Nginx in the foreground
CMD ["nginx", "-g", "daemon off;"]