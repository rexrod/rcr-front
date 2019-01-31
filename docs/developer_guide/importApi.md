# Gerando a API pelo Swagger e Importando-a no Projeto
## Gerando Manualmente
### Passo 1
Acesse o _web service_ que você precisará, exemplo:

[http://localhost:8082/ws-sgm-companies/api/swagger-ui.html#/](http://localhost:8082/ws-sgm-companies/api/swagger-ui.html#/)

### Passo 2
Inspencione a resposta da requisição `api-docs`, no _Network_ do _Debug_ de seu navedor.
Copie-a e entre neste link:

**Swagger Editor:** [https://editor.swagger.io](https://editor.swagger.io)

---

#### Alternativa para obter os dados de configuração
Digite o comando:
```sh
curl -L http://172.100.10.134:8082/ws-sgm-companies/api/v2/api-docs && echo
```
Copie o retorno e entre no [Swagger Editor](https://editor.swagger.io).

---

### Passo 3
Cole todo o conteúdo copiado no editor substituindo o conteúdo existente.

### Passo 4
Clique em _Generate Client_ e clique em _typescript-angular_.

> **Nota:** Isso baixará o modulo em arquivo `.zip`.

### Passo 5 - Importando<a name="importing"></a>
Extraia o arquivo `.zip`.

### Passo 6
Coloque a pasta descompactada dentro da pasta `src/app/module`, renomeando para o nome do recurso no **plural** e em **inglês**, exemplo `companies`.

### Passo 7
Certifique-se que o diretório `module` está com esta estrutura:
```sh
.
└── module
    └── companies
        ├── api
        └── model
```
## Gerando por comando<a name="generating"></a>
### Pre-réquisito
* swagger-codegen-cli **v.2.3.1**

Baixe o `swagger-codegen-cli` com o comando:
```sh
wget http://central.maven.org/maven2/io/swagger/swagger-codegen-cli/2.3.1/swagger-codegen-cli-2.3.1.jar -O ~/Downloads/swagger-codegen-cli.jar
```

Gere os códigos com o cliente baixado, como no exemplo:
```sh
java -jar ~/Downloads/swagger-codegen-cli.jar generate -i http://172.100.10.134:8082/ws-sgm-resources/api/v2/api-docs -l typescript-angular -o src/app/module/resources
```
> **Nota:** Onde _resources_ é o nome do recurso no **plural** e em **inglês**, exemplo: companies.

## Configurando a Api
Consulte em [Configurando a Api](/developer_guide/api#configuring).

> **Nota:** O _codegen_ do _swagger_ gera os links de acesso por padrão em `https`, isso pode resultar em erro de requisição, caso necessário, modifique os links _controller_ utilizado para `http`.