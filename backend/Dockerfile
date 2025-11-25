FROM node:20-alpine

WORKDIR /app

# Copiamos package.json / package-lock.json
COPY package*.json ./

# Instalar dependencias (en prod, mejor sin devDependencies si las tienes separadas)
RUN npm ci --omit=dev

# Copiamos el resto del backend
COPY . .

# Variable de entorno
ENV NODE_ENV=production

# Puerto del backend
EXPOSE 3000

# Comando de inicio
CMD ["node", "server.js"]
