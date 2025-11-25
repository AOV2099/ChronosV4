FROM node:20-alpine

WORKDIR /app

# Copiamos package.json / package-lock.json si existe
COPY package*.json ./

# Instalar dependencias
# Para evitar broncas con npm ci, usamos npm install
# Si quieres sólo prod puedes usar --omit=dev (Node 20 lo soporta)
RUN npm install --omit=dev

# Si te diera lata el --omit=dev, cámbialo a: 
# RUN npm install

# Copiamos el resto del backend
COPY . .

ENV NODE_ENV=production

EXPOSE 3000

CMD ["node", "server.js"]
