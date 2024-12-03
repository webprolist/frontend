# Step 1: Build React App

FROM node:22-alpine3.20 AS build

WORKDIR /app

COPY package.json package-lock.json ./

RUN npm install

COPY . .

RUN npm run build

# Step 2: Server With Nginx

FROM nginx:1.27.3-bookworm

# nginx 기본 설정 파일 제거
RUN rm /etc/nginx/conf.d/default.conf

# SPA를 위해 nginx 설정 파일 복사
COPY --from=build /app/nginx.conf /etc/nginx/conf.d/default.conf

WORKDIR /usr/share/nginx/html

RUN rm -rf *

COPY --from=build /app/dist .

EXPOSE 80

# nginx foreground 실행
ENTRYPOINT [ "nginx", "-g", "daemon off;" ]