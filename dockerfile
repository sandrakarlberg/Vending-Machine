FROM node:20 AS build

WORKDIR /app

# ---- Install backend deps ----
COPY package*.json ./
RUN npm install

# ---- Copy backend code ----
COPY tsconfig*.json ./
COPY src ./src

# ---- Install frontend deps ----
WORKDIR /app/frontend
COPY frontend/package*.json ./
RUN npm install

# ---- Copy frontend code ----
COPY frontend/ ./

# ---- Build frontend ----
RUN npm run build

# ---- Go back to root for backend build ----
WORKDIR /app
RUN npx tsc

# ---- Start backend ----
EXPOSE 3000
CMD ["node", "dist/server.js"]
