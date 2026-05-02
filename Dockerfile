FROM node:20-alpine
WORKDIR /app

COPY package*.json ./
RUN npm install --omit=dev

COPY app.js ./app.js
COPY pubkey ./pubkey
COPY public ./public

ENV PORT=3010
ENV PUBLIC_ROOT=/app/public

EXPOSE 3010
CMD ["npm", "start"]