# Rodando a documentação
Está documentação está embutida no projeto dentro da pasta `docs`.
 É feita com `Mkdocs`, uma ferramenta em **Python** que utiliza **Markdown** em sua páginas.

## Dependências

* Python **v2.7**

!!! info 
    Para instalar o **Python**, faça o sequinte comando:

    ```sh
    sudo apt install python
    ```

* Mkdocs **v1.0.4**

!!! info 
    Para instalar o **Mkdocs**, faça o sequinte comando:

    ```sh
    sudo apt install mkdocs
    ```
## Rodando a documentação localmente

Dentro da pasta raiz do seu projeto, rode o comando:

```sh
mkdocs serve
```
!!! nota 
    O link padrão de acesso é [http://localhost:8000](http://localhost:8000).

## Rodando a documentação no ambiente de desenvolvimento

Dentro da pasta raiz do seu projeto, rode o comando:

```bash
mkdocs serve -a 0.0.0.0:8000
```

!!! warning "Atenção"
    Quando você sobe em ambiente desenvolvimento, está acessível por todos da sua rede local.


Veja também: [Rodando a documentação com Docker](../../export_pdf#rodando-o-server-em-dev).