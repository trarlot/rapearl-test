
# Étape de construction pour le client React
FROM node:17-alpine as client-builder
WORKDIR /app/client
COPY ./client ./
RUN npm install


# Étape de construction pour le serveur Node.js
FROM node:17-alpine as server-builder
WORKDIR /app/server
COPY ./server ./
RUN npm install


# Étape finale : l'image que vous allez utiliser
FROM node:17-alpine
WORKDIR /app
RUN npm install
COPY --from=client-builder /app/client /app/client
COPY --from=server-builder /app/server /app/server

EXPOSE 3001  
CMD ["npm", "start"]