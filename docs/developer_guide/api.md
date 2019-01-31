# APIs do SGM
As APIs possuem portas padrões para cada serviço, com isso os serviços não serão confundidos e não será necessário configurar sempre que houver atualizações.
Os serviços existentes são:

\#   |Nome do Serviço | Link Swagger                                  | Porta Padrão Dev | Recursos| Status
:---:|----------------|-----------------------------------------------|:----------------:|---------|:-----:
1|ws-sgm-notices|<a href="http://172.100.10.34:8080/ws-sgm-notices/api/swagger-ui.html#/" target="_blank">Avisos</a>|8081|<li>Avisos</li><li>Prioridade de Avisos</li>|<span id="api-ws-sgm-notices" ><span class="badge badge-pill badge-secondary">Verificando...</span></span>
2|ws-sgm-companies|<a href="http://172.100.10.34:8080/ws-sgm-companies/api/swagger-ui.html#/" target="_blank">Companhias</a>|8082|<li>Companhias</li><li>Áreas</li><li>Departamentos</li><li>Setores</li>|<span id="api-ws-sgm-companies" ><span class="badge badge-pill badge-secondary">Verificando...</span></span>
3|ws-sgm-segments|<a href="http://172.100.10.34:8080/ws-sgm-segments/api/swagger-ui.html#/" target="_blank">Segmentos</a>|8083|<li>Segmentos</li>|<span id="api-ws-sgm-segments" ><span class="badge badge-pill badge-secondary">Verificando...</span></span>
4|ws-sgm-fabricators|<a href="http://172.100.10.34:8080/ws-sgm-fabricators/api/swagger-ui.html#/" target="_blank">Fabricantes</a>|8084|<li>Fabricantes</li>|<span id="api-ws-sgm-fabricators" ><span class="badge badge-pill badge-secondary">Verificando...</span></span>
5|ws-sgm-service-order-types|<a href="http://172.100.10.34:8080/ws-sgm-service-order-types/api/swagger-ui.html#/" target="_blank">Tipos de Ordem de Serviço</a>|8085|<li>Tipos de Ordem de Serviço</li>|<span id="api-ws-sgm-service-order-types" ><span class="badge badge-pill badge-secondary">Verificando...</span></span>
6|ws-sgm-slas|<a href="http://172.100.10.34:8080/ws-sgm-slas/api/swagger-ui.html#/" target="_blank">SLAs</a>|8086|<li>SLAs</li>|<span id="api-ws-sgm-slas" ><span class="badge badge-pill badge-secondary">Verificando...</span></span>
7|ws-sgm-service-order-titles|<a href="http://172.100.10.34:8080/ws-sgm-service-order-titles/api/swagger-ui.html#/" target="_blank">Título da OS</a>|8087|<li>Título da OS</li>|<span id="api-ws-sgm-service-order-titles" ><span class="badge badge-pill badge-secondary">Verificando...</span></span>
8|ws-sgm-models|<a href="http://172.100.10.34:8080/ws-sgm-models/api/swagger-ui.html#/" target="_blank">Modelos</a>|8088|<li>Modelos</li>|<span id="api-ws-sgm-models" ><span class="badge badge-pill badge-secondary">Verificando...</span></span>
9|ws-sgm-equipments|<a href="http://172.100.10.34:8080/ws-sgm-equipments/api/swagger-ui.html#/" target="_blank">Equipamentos</a>|8089|<li>Equipamentos</li>|<span id="api-ws-sgm-equipments" ><span class="badge badge-pill badge-secondary">Verificando...</span></span>
10|ws-sgm-parts|<a href="http://172.100.10.34:8080/ws-sgm-parts/api/swagger-ui.html#/" target="_blank">Peças</a>|8090|<li>Peças</li>|<span id="api-ws-sgm-parts" ><span class="badge badge-pill badge-secondary">Verificando...</span></span>
11|ws-sgm-measures-units|<a href="http://172.100.10.34:8080/ws-sgm-measures-units/api/swagger-ui.html#/" target="_blank">Unidades de Medida</a>|8091|<li>Unidades de Medida</li>|<span id="api-ws-sgm-measures-units" ><span class="badge badge-pill badge-secondary">Verificando...</span></span>
12|ws-sgm-service-orders|<a href="http://172.100.10.34:8080/ws-sgm-service-orders/api/swagger-ui.html#/" target="_blank">Ordem de Serviço</a>|8092|<li>Ordem de Serviço</li><li>Prioridades de Ordem de Serviço</li>|<span id="api-ws-sgm-service-orders" ><span class="badge badge-pill badge-secondary">Verificando...</span></span>
13|ws-sgm-materials|<a href="http://172.100.10.34:8080/ws-sgm-materials/api/swagger-ui.html#/" target="_blank">Materiais</a>|8093|<li>Materiais</li>|<span id="api-ws-sgm-materials" ><span class="badge badge-pill badge-secondary">Verificando...</span></span>
14|ws-sgm-activities|<a href="http://172.100.10.34:8080/ws-sgm-activities/api/swagger-ui.html#/" target="_blank">Atividades</a>|8094|<li>Atividades</li><li>Periodicidades</li><li>Equipes</li>|<span id="api-ws-sgm-activities" ><span class="badge badge-pill badge-secondary">Verificando...</span></span>

> Nota: O **localhost** pode ser substituído pelo **IP** de sua preferência.

## Configurando a Api<a name="configuring"></a>
Apoś importar o módulo, descrito neste link: [Gerando e Importando a Api](/developer_guide/importApi).

No arquivo `src/app/app.module.ts`, importe o módulo da api desejada residente na pasta `src/app/module/resources`, onde `resources` é o recurso que você irá utilizar, exemplo, `src/app/module/companies`.

Renomeie o módulo para não dá conflito, conforme o recurso utilizado, exemplo:

```typescript
...
import { ApiModule as AppCompaniesModule } from './module/companies';

@NgModule({
    ...
    AppCompaniesModule,
    ...
})
export class AppModule { }
```
## Rodando a Api
Baixe o os `web-service` para sua pasta padrão de projetos:
```sh
git clone http://172.100.10.24/micro-services/sgm/ws-sgm-name
```

Entre no projeto:
```sh
cd ws-sgm-name
```

E rode o comando:
```sh
mvn spring-boot:run
``` 
> **Nota:** O comando `mvn` é o `maven`, gerenciador de dependências `java`, use o comando `sudo apt install mvn` para instalá-lo.

## Atualizando a Api
Para atualizar utilize o mesmo procedimento usado para gerar a Api.

Consulte em [Gerando por Comando](/developer_guide/importApi#generating).

## Setando as Variáveis de Ambiente 
As configurações estão localizadas no arquivo `src/environment/environment.ts`.
> Para o _build_ configure também o arquivo `src/environment/environment.dev.ts`