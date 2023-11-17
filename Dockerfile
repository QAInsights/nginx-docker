FROM newrelic/infrastructure:latest

RUN echo "license_key: ENTER_KEY" > /etc/newrelic-infra/newrelic-infra.yml

RUN apk update && apk add nginx

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
