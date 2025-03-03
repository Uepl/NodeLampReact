FROM php:apache
RUN apt-get update && apt-get install -y && \ 
    a2enmod rewrite proxy proxy_http authz_core

RUN a2enmod rewrite proxy proxy_http
COPY ./apache/000-default.conf /etc/apache2/sites-available/000-default.conf

RUN a2dissite 000-default.conf && \
    a2ensite 000-default.conf

WORKDIR /var/www/html

EXPOSE 80

# เปิดใช้งาน PHP
CMD ["apache2-foreground"]