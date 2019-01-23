# SGM - Sistema de Gerecimento em Manutenção

<center>

![SGM Logo](assets/images/logo_dark.png)

</center>

Este é um projeto feito com *Fury FrameWork* em *Angular Material* para mais informações acesse:

* **Fury:** [https://fury.visurel.com/](https://fury.visurel.com/)
* **Angular Material:** [https://material.angular.io/](https://material.angular.io/)

## Dependências

* NodeJS **v10.13.0**

```sh
# Using Ubuntu
curl -sL https://deb.nodesource.com/setup_10.x | sudo -E bash -
sudo apt-get install -y nodejs
```
> **Obs:** Use o comando `n` para gerenciar a versão do node.

```sh
# For Ubuntu 18.04
sudo apt install build-essential 
curl -L https://git.io/n-install | bash
n 10.13.0
```

* Angular **v7.0.2**

```sh
npm install -g @angular/cli
```

## Rodando o projeto
Na pasta do projeto, execute:

```sh
# instalando dependências
npm install
ng serve
```

## Acesso por outra máquina em rede local

```sh
ng serve --host=0.0.0.0 --port 4300
```

### Com docker

Faça o _build_ para gerar a imagem:

```sh
docker build --tag sgmfrontend docker/frontend
```

Rode o server:

```sh
docker run -it --rm -v ~/projects/sgm:/code -p 4200:4200 sgmfrontend
```

> **Obs:** Pode ser em qualquer porta de sua preferência, a porta padrão é `4200`.

## Backend
O acesso ao projeto de serviço pode ser verificado no seguinte link:
[ws-sgm-notices](http://172.100.10.24/micro-services/sgm/ws-sgm-notices)

## Guia do Desenvolvedor
Para auxiliar o desenvolvimento do SGM, você pode contar com a documentação embutida no projeto
dentro da pasta `docs`. É feita com `Mkdocs`, uma ferramenta em **Python** que utiliza **Markdown** em sua páginas.
Acesse o [Guia do Desenvolvedor](http://172.100.10.134:8000/developer_guide/).

### Rodando o Guia do Desenvolvedor localmente<a name="running"></a>
Para subir a documentação você precisa instalar o `Mkdocs`:
```sh
sudo apt install mkdocs
```

Dentro da pasta raiz do seu projeto, rode o comando:
```sh
mkdocs serve
```
> Para rodar no seu ambiente de desenvolvimento acessível na sua rede, use o paramêtro `-a 0.0.0.0:8000` com o comando acima.

#### Com Docker (Opicional)

Para as instruções completas para o uso do `Docker` na documentação, acesse o link: [Utilizando Docker na Documentação](http://172.100.10.134:8000/export_pdf/).

#### Rodando o Frontend e a Documentação

* Instale o `docker-compose`

```sh
sudo curl -L "https://github.com/docker/compose/releases/download/1.23.1/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose
sudo chmod +x /usr/local/bin/docker-compose
```

* Suba os containers:

```sh
docker-compose up
```

## Direitos
Este é um software do **Instituto Transire** onde todos os direitos são reservados. 