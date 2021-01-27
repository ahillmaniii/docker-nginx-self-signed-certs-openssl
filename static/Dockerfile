# Base
FROM alpine

#RUN
RUN apk add nginx openssl bash; \
    mkdir /run/nginx; \
    echo "<h1>Hello world!</h1>" > /var/www/localhost/htdocs/index.html;

#Create cert
RUN openssl req -x509 -nodes -days 365 -subj "/C=CA/ST=QC/O=Company, Inc./CN=mydomain.com" -addext "subjectAltName=DNS:mydomain.com" -newkey rsa:2048 -keyout /etc/ssl/private/nginx-selfsigned.key -out /etc/ssl/certs/nginx-selfsigned.crt;

# CONFIGUTATIONS
# nginx configuration
ADD $PWD/config/default.conf /etc/nginx/conf.d/default.conf

WORKDIR /var/www/localhost/htdocs
#ENTRYPOINT
COPY $PWD/config/entrypoint.sh /usr/local/bin
RUN chmod +x /usr/local/bin/entrypoint.sh

ENTRYPOINT ["/bin/sh", "/usr/local/bin/entrypoint.sh"]

EXPOSE 80

EXPOSE 443

CMD ["/bin/sh", "-c", "nginx -g 'daemon off;'; nginx -s reload;"]

