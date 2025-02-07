# Usar uma imagem leve do Nginx
FROM nginx:alpine

# Copiar os arquivos do seu site para o diretório padrão do Nginx
COPY . /usr/share/nginx/html

# Expor a porta padrão do Nginx
EXPOSE 80

# Iniciar o Nginx
CMD ["nginx", "-g", "daemon off;"]
