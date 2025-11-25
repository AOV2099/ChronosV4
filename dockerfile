# =========================
# Etapa 1: Build del frontend
# =========================
FROM node:20-alpine AS frontend-build

# Carpeta de trabajo para el front
WORKDIR /frontend

# Copiamos solo los package para aprovechar caché
COPY chronos/package*.json ./

RUN npm ci

# Ahora copiamos el resto del front
COPY chronos/ .

# Construimos el frontend (debe generar /frontend/dist)
RUN npm run build


# =========================
# Etapa 2: Backend + frontend compilado
# =========================
FROM node:20-alpine AS backend

WORKDIR /app

# Copiamos package.json del backend
COPY backend/package*.json ./

RUN npm ci

# Copiamos el código del backend
COPY backend/ .

# Copiamos el build del frontend dentro del backend
# Ajusta la carpeta destino según cómo sirvas archivos estáticos en server.js
# Aquí supongo que usas /app/public como static dir
COPY --from=frontend-build /frontend/dist ./public

# Variables de entorno
ENV NODE_ENV=production

# Puerto de tu backend
EXPOSE 3000

# Comando de inicio
CMD ["node", "server.js"]
