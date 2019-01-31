FROM ubuntu:cosmic

ENV LANG=C.UTF-8

# Atualizando o repositório
RUN apt-get update
RUN apt-get upgrade -y

# Dependências
RUN apt-get install build-essential curl -y
RUN curl -sL https://deb.nodesource.com/setup_11.x | bash -
RUN apt-get install -y nodejs
RUN npm install -g @angular/cli -d

# Setando diretório padrão
WORKDIR /app

# Expose angular development server port
EXPOSE 4200

# Start development server by default
ENTRYPOINT ["ng"]

CMD ["serve","--host=0.0.0.0"]
