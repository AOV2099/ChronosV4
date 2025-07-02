FROM node:20

WORKDIR /app

# Copiamos solo package.json primero para aprovechar caché
COPY package*.json ./

RUN npm install

# Ahora sí, copiamos el resto
COPY . .

# Expón el puerto del backend
EXPOSE 3000

# Comando para iniciar el servidor
CMD ["node", "server.js"]
