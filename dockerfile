from node:20-alpine

env node_env production

workdir /app

copy package*.json ./

run npm ci --omit=dev

copy . .

run npm run build

cmd ["npm", "run", "start:prod"]