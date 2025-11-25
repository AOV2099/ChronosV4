# ==========================
# Etapa 1: Build del frontend
# ==========================
FROM node:20-alpine AS build

WORKDIR /app

# Copiamos solo package.json/package-lock para aprovechar caché
COPY package*.json ./

# Instalar dependencias
RUN npm install

# Copiamos el resto del código del frontend
COPY . .

# Construimos el proyecto (Vite, Svelte, React, etc.)
RUN npm run build


# ==========================
# Etapa 2: Servir con nginx
# ==========================
FROM nginx:alpine

# Borramos la config por defecto
RUN rm /etc/nginx/conf.d/default.conf

# Copiamos nuestra config personalizada para SPA
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copiamos el build generado por Vite
COPY --from=build /app/dist /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
