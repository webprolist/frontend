# Step 1: Build React App

FROM node:22-alpine3.20 AS builder

WORKDIR /app

COPY package.json package-lock.json ./

RUN npm install

COPY . .

RUN npm run build

# Step 2: Server With Nginx

FROM nginx:1.27.3-alpine
# nginx 폴더 내로 이동
WORKDIR /usr/share/nginx/html
# 파일 제거
RUN rm -rf *
# build stage에서 /app/dist 폴더 내의 파일 복사
COPY --from=build /app/dist .

EXPOSE 80
# nginx foreground 실행
ENTRYPOINT [ "nginx", "-g", "daemon off;" ]