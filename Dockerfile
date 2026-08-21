FROM nginx:1.27-alpine

# Variables de entorno por defecto
ENV API_UPSTREAM=http://security-api:3000
ENV API_KEY=""

# Copiar archivos estáticos del frontend
COPY index.html styles.css app.js /usr/share/nginx/html/

# Copiar plantilla de configuración de Nginx (sustituye variables automáticamente con envsubst)
COPY nginx.conf.template /etc/nginx/templates/default.conf.template

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
