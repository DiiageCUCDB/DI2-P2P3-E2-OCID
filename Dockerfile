# ---------- Build stage ----------
    FROM node:22-alpine AS build
    WORKDIR /app
    
    COPY package*.json ./
    RUN npm ci
    
    COPY . .
    
    # Optional build-time variables (Vite exposes VITE_* vars)
    ARG VITE_API_URL
    ENV VITE_API_URL=$VITE_API_URL
    
    RUN npm run build
    
    # ---------- Production stage ----------
    FROM nginx:1.27-alpine AS production
    
    COPY nginx.conf /etc/nginx/conf.d/default.conf
    COPY --from=build /app/dist /usr/share/nginx/html
    
    EXPOSE 80
    HEALTHCHECK --interval=30s --timeout=3s CMD wget -qO- http://localhost/ >/dev/null || exit 1
    
    CMD ["nginx", "-g", "daemon off;"]