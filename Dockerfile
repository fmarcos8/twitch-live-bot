FROM node:20-alpine

WORKDIR /app

# Copia primeiro só os arquivos de dependência
COPY package*.json ./

RUN npm install --production

# Agora copia o resto
COPY . .

EXPOSE 3000

CMD ["node", "index.js"]