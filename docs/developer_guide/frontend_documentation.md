# Documentação do Frontend

Para auxiliar o desevolvimento, o desenvolvedor pode contar com a **documentação de código** feita com o `Compodoc`.

## Instalação

```sh
sudo npm i -g @compodoc/compodoc
```

## Uso

Na `raíz` do seu projeto, execute:

```sh
compodoc -p tsconfig.json
```

!!! info
    Isso criará pasta `documentation/` com o _build_ da documentação do seu projeto. Adicione-a ao `.gitignore`.

## Server

Na `raíz` do seu projeto, execute:

```sh
compodoc -s
```

!!! info
    Estará disponível em `http://localhost:8080/`.