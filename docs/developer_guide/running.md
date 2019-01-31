# Rodando o projeto

Este é um projeto feito com *Fury FrameWork* em *Angular Material* para mais informações acesse:

* **Fury:** [https://fury.visurel.com/](https://fury.visurel.com/)
* **Angular Material:** [https://material.angular.io/](https://material.angular.io/)

## Dependências

* NodeJS **v9.4.0**

```sh
curl -0 -L https://npmjs.com/install.sh | sudo sh
```
!!! note "Nota"
    Use o comando `n` para gerenciar a versão do node.

```sh
# For Ubuntu 18.04
sudo apt install build-essential 
curl -L https://git.io/n-install | bash
n 9.4.0
```

* Angular **v6.0.8**

```sh
npm install -g @angular/cli
```

## Subindo a Aplicação
Na pasta do projeto, execute:

```sh
# instalando dependências
npm install
ng serve
```
!!! note "Nota"
    Acesse a aplicação pelo link [http://localhost:4200](http://localhost:4200)

## Acesso por outra máquina em rede local

```sh
ng serve --host=0.0.0.0 --port 4300
```

!!! note "Nota"
    Pode ser em qualquer porta de sua preferência, a porta padrão é `4200`.

## Subindo aplicação com Docker

Faça o _build_ para gerar a imagem:

```sh
docker build --tag sgmfrontend docker/frontend
```

Rode o server:

```sh
docker run -it --rm -v ~/projects/sgm:/code -p 4200:4200 sgmfrontend
```

## Backend
O acesso ao projeto de serviço pode ser verificado na tabela abaixo:

\#   |Nome do Serviço | Repositório do projeto                        |Dependências| Status
:---:|----------------|-----------------------------------------------|:----------:|:------:
1|ws-sgm-notices|<a href="http://172.100.10.24/micro-services/sgm/ws-sgm-notices" target="_blank">Avisos</a>|<li>ws-sgm-login</li>|<span id="repo-ws-sgm-notices" ><span class="badge badge-pill badge-secondary">Verificando...</span></span>
2|ws-sgm-companies|<a href="http://172.100.10.24/micro-services/sgm/ws-sgm-companies" target="_blank">Companhias</a>|<li>ws-sgm-login</li>|<span id="repo-ws-sgm-companies" ><span class="badge badge-pill badge-secondary">Verificando...</span></span>
3|ws-sgm-segments|<a href="http://172.100.10.24/micro-services/sgm/ws-sgm-segments" target="_blank">Segmentos</a>|<li>ws-sgm-login</li>|<span id="repo-ws-sgm-segments" ><span class="badge badge-pill badge-secondary">Verificando...</span></span>
4|ws-sgm-fabricators|<a href="http://172.100.10.24/micro-services/sgm/ws-sgm-fabricators" target="_blank">Fabricantes</a>|<li>ws-sgm-login</li>|<span id="repo-ws-sgm-fabricators" ><span class="badge badge-pill badge-secondary">Verificando...</span></span>
5|ws-sgm-service-order-types|<a href="http://172.100.10.24/micro-services/sgm/ws-sgm-service-order-types" target="_blank">Tipos de Ordem de Serviço</a>|<li>ws-sgm-login</li>|<span id="repo-ws-sgm-service-order-types" ><span class="badge badge-pill badge-secondary">Verificando...</span></span>
6|ws-sgm-slas|<a href="http://172.100.10.24/micro-services/sgm/ws-sgm-slas" target="_blank">SLAs</a>|<li>ws-sgm-login</li>|<span id="repo-ws-sgm-slas" ><span class="badge badge-pill badge-secondary">Verificando...</span></span>
7|ws-sgm-login|<a href="http://172.100.10.24/micro-services/sgm/ws-sgm-login" target="_blank">Login</a>|-|<span id="repo-ws-sgm-login" ><span class="badge badge-pill badge-secondary">Verificando...</span></span>