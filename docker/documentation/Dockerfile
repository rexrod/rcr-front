FROM ubuntu:bionic

ENV ENABLE_PDF_EXPORT=false
ENV LANG=C.UTF-8

# Atualizando o repositório
RUN apt-get update && apt-get upgrade -y

# Dependências
RUN apt-get install build-essential \
python3-dev \
python3-pip \
python3-setuptools \
python3-wheel \
python3-cffi \
libcairo2 \
libpango-1.0-0 \
libpangocairo-1.0-0 \
libgdk-pixbuf2.0-0 \
libffi-dev \
shared-mime-info -y

RUN apt-get install software-properties-common -y

# Instalando o mkdocs e o tema material
RUN pip3 install mkdocs-material
RUN pip3 install mkdocs-pdf-export-plugin

# Instalando o pdftk
RUN add-apt-repository ppa:malteworld/ppa -y
RUN apt-get install pdftk -y

# Setando diretório padrão
WORKDIR /docs

# Expose MkDocs development server port
EXPOSE 8000

# Start development server by default
ENTRYPOINT ["mkdocs"]
CMD ["serve", "--dev-addr=0.0.0.0:8000"]
