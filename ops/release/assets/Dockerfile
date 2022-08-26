FROM nginx:stable-alpine
LABEL maintainer="Dominique Lebrun <dominique.lebrun@belighted.com>"

RUN mkdir -p /app/public
WORKDIR /app/public

ADD ./public /app/public
ADD ./ops/release/assets/nginx.conf /etc/nginx/conf.d/default.conf
