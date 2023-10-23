# Build SPA
FROM node:21 AS build
WORKDIR /scripts
COPY . .
RUN npm install \
  && npm run build 

# Build Docker Image
FROM nginx:1.25.2-alpine
WORKDIR /
COPY --from=build /scripts/build /usr/share/nginx/html
