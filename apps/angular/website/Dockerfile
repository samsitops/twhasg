FROM docker.io/nginx:stable-alpine
COPY dist/apps/teamWorkHealth/angular/website/browser /usr/share/nginx/html/
COPY infra/docker/configs/nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
