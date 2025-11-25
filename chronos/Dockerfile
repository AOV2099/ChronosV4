# Etapa 1: build
FROM node:20-alpine AS builder

WORKDIR /app

COPY . .

RUN npm install
RUN npm run build

# Etapa 2: servidor estático (nginx)
FROM nginx:alpine

COPY --from=builder /app/build /usr/share/nginx/html

# Opcional: reemplaza el default.conf si usas rutas distintas
# COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
