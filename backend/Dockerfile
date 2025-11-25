FROM node:20-alpine

WORKDIR /app

# Copiamos package.json / package-lock.json si existe
COPY package*.json ./

# Instalar dependencias (simple y confiable)
RUN npm install

# Copiamos el resto del backend
COPY . .

ENV NODE_ENV=production

# Puerto del backend
EXPOSE 3000

# Comando de inicio
CMD ["node", "server.js"]
