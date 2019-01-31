# Materiais

| | |
|-|-|
|**Descrição:**| Itens utilizados para auxílio na manutenção. Por definição, é um recurso que se esgota, finito.|
|**Finalidade:**| Mapear a quantidade de itens que são utilizados em uma Ordem de Serviço|
|**Nome do Projeto:**|_ws-sgm-materials_ <small>Materials</small>|
|**Exemplos:**|<li>Fita Gomada</li><li>Super Cola</li>|

## Dependências

* Precisa está logado.
* Precisa ter pelo menos um **Segmento** cadastrado.
* Precisa ter pelo menos um **Fabricante** cadastrado.
* Precisa ter pelo menos um **Modelo** cadastrado.
* Precisa ter pelo menos um **Setor** cadastrado.

## Campos

Nome|Descrição|Entrada de Dados|Restrições|Obrigatório|
:---|:--------|:---|:---|:---------:
**Nome do Material**|Nome de Exibição do Material.|<li>texto</li>|<li>Não permite espaços em branco</li><li>Deve conter no máximo 255 caracteres</li>|<span class="badge badge-pill badge-success">Sim</span>
**Endereço**|Localização de onde o material se encontrar ou será guardado.|<li>texto</li>|<li>Não permite espaços em branco</li><li>Deve conter no máximo 255 caracteres</li>|<span class="badge badge-pill badge-success">Sim</span>
**Segmento**|Define o tipo de serviço que será executado.|<li>números</li>|<li>Somente por seleção</li>|<span class="badge badge-pill badge-success">Sim</span>
**Fabricante**|Fabricante do material.|<li>números</li>|<li>Somente por seleção</li>|<span class="badge badge-pill badge-success">Sim</span>
**Modelo**|Modelo do material segundo o fabricante.|<li>números</li>|<li>Somente por seleção</li><li>Depende do Fabricante selecionado</li>|<span class="badge badge-pill badge-success">Sim</span>
**Setor**|Setor ou Local o qual o material está alocado ou armaxenado.|<li>números</li>|<li>Somente por seleção</li>|<span class="badge badge-pill badge-success">Sim</span>
**Quantidade Real**|Quantidade reais de itens existente.|<li>números</li>|<li>Somente números</li>|<span class="badge badge-pill badge-success">Sim</span>
**Quantidade Máxima**|Quantidade máxima de itens. Para analisar quais itens estão sendo adiquirido mais do que se precisa.|<li>números</li>|<li>Somente números</li>|<span class="badge badge-pill badge-success">Sim</span>
**Quantidade Mínima**|Quantidade mínima de itens. Para gerar alerta quando o estoque estiver baixo.|<li>números</li>|<li>Somente números</li>|<span class="badge badge-pill badge-success">Sim</span>
**Código do Sinergi**|Código do mesmo produto ou equivalente no Sistema Sinergi.|<li>letras e números</li>|<li>Somente letras e números</li>|<span class="badge badge-pill badge-success">Sim</span>
**Valor no Sinergi**|Valor em Reais para o material no Sistema Sinergi.|<li>números</li>|<li>Somente números</li>|<span class="badge badge-pill badge-success">Sim</span>

## Cadastrar

1. Clique no menu lateral <span class="btn-panel"><i class="material-icons">list</i> Materiais</span>;
2. Clique no ícone ![Botão de Adicionar](/assets/images/button_add.png);
3. No _popup_ de **Cadastrar**, preencha os campos conforme as definições da <a href="#campos">tabela acima</a>;
4. Clique em ![Botão de Salvar](/assets/images/button_save.png).

!!! warning "Aviso"
    Se o **Nível de Prioridade** for igual a de uma já existente, você será alertado  
    `Este nome já existe! Tente outro.`

## Alterar

1. Clique no menu lateral <span class="btn-panel"><i class="material-icons">list</i> Materiais</span>;
2. Clique no ícone ![Botão de Atualizar](/assets/images/button_update.png), localizado na tabela.
3. No _popup_ de **Atualizar**, modifique os campos conforme as definições da <a href="#campos">tabela acima</a>;
4. Clique em ![Botão de Atualizar](/assets/images/button_update_large.png).

!!! warning "Aviso"
    Se o **Nível de Prioridade** for igual a de uma já existente, você será alertado  
    `Este nome já existe! Tente outro.`

## Excluir

1. Clique no menu lateral <span class="btn-panel"><i class="material-icons">list</i> Materiais</span>;
2. Clique no ícone ![Botão de Deletar](/assets/images/button_delete.png), localizado na tabela.
3. Confirme, no _popup_, o item a ser deletado.
4. Clique em ![Botão de Deletar](/assets/images/button_delete_large.png).

!!! warning "Aviso"
    Caso o item esteja **vinculado**, **NÃO SERÁ POSSÍVEL EXCLUÍ-LO**.