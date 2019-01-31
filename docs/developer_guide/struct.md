# Estrutura de Diretórios

```sh
.
├── mkdocs.yml # <-- arquivo de configuração do mkdocs
├── ng-template.sh # <-- script para gerar templates
├── README.md # <-- apresentação do projeto
├── docs # <-- pasta de documentações do mkdocs
└── src
    ├── app
    │   ├── containers # <-- alocação dos recursos
    │   │   └── resources # <-- pasta do recurso no plural e em inglês, tela de listagem
    │   │       └── resource-create-update # <-- criação e atualização do recurso, no singular
    │   ├── core # <-- todos componentes pertinentes ao projeto
    │   ├── demo # <-- componentes do fury, servem como exemplo
    │   │   ├── custom-pages # <-- componentes customizados
    │   │   │   ├── forgot-password
    │   │   │   ├── login # <-- tela de login
    │   │   │   └── register
    │   ├── models # <-- pasta de modelos
    │   │   └── resources
    │   ├── module # <-- pasta de modulos exportada da api pelo swagger
    │   │   └── resources
    │   │       ├── api # <-- controllers
    │   │       └── model # <-- models utilizados pela api
    │   ├── service # <-- serviços que rodam em backdround
    │   └── utils # <-- canivete suiço do sistema
    ├── assets # <-- pasta de imagens
    │   ├── icons
    │   └── img
    │       ├── attachments
    │       ├── avatars
    │       └── backgrounds
    ├── environments # <-- configurações do ambiente
    └── styles # <-- pasta de configurações de estilos gerais
```