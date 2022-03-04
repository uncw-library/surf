FROM amd64/php:5.6.40-apache

WORKDIR /var/www/html/surf

COPY --chown=www-data:www-data ./app .
