# Áreas

|   |   |
|---|---|
|**Descrição:**| É o segundo nível na hierarquia de uma companhia.|
|**Finalidade:**| A Tela de **Áreas** está vinculada diretamente a **Companhia**.|
|**Nome em Inglês:**|_areas_|
|**Serviço Padrão:**|_ws-sgm-companies_|
|**Status do Serviço:**|<span id="api-ws-sgm-companies" ><span class="badge badge-pill badge-secondary">Verificando...</span></span>|

## Dependências

* Precisa está logado.

## Regra de Cadastro e Atualização

1. Não pode ter nomes iguais de **Áreas**.
2. Na atualização, o nome do campo pode ser editável.

## Campos

Nome|Descrição|Entrada de Dados|Restrições|Obrigatório|
:---|:--------|:---|:---|:---------:
**Áreas**|É o segundo nível na hierarquia de uma companhia, é uma divisão abrangente da empresa. ex: Produto Acabado, Produto Semiacabado.|<li>texto</li>|<li>Não permite espaços em branco</li><li>Deve conter no máximo 255 caracteres</li>|<span class="badge badge-pill badge-success">Sim</span>

## Passo a passo

### Cadastrar

1. Clique no menu lateral <span class="btn-panel"><i class="material-icons">map</i> Áreas</span>;
2. Clique no ícone ![Botão de Adicionar](/assets/images/button_add.png);
3. No _popup_ de **Cadastrar**, digite o **Nome da Área**.
4. Clique em ![Botão de Salvar](/assets/images/button_save.png).

### Alterar

1. Clique no menu lateral <span class="btn-panel"><i class="material-icons">map</i> Áreas</span>;
2. Clique no ícone ![Botão de Atualizar](/assets/images/button_update.png), localizado na tabela.
3. No _popup_ de **Atualizar**, você pode modificar o **Nome da Área**.
5. Clique em ![Botão de Atualizar](/assets/images/button_update_large.png).

!!! warning "Aviso"
    Se o nome de **Áreas** for igual a de uma já existente, você será alertado  
    `Este nome já existe! Tente outro.`

### Excluir

1. Clique no menu lateral <span class="btn-panel"><i class="material-icons">map</i> Áreas</span>;
2. Clique no ícone ![Botão de Deletar](/assets/images/button_delete.png), localizado na tabela.
3. Confirme, no _popup_, o item a ser deletado.
4. Clique em ![Botão de Deletar](/assets/images/button_delete_large.png).

!!! warning "Aviso"
    Caso o item esteja **vinculado**, **NÃO SERÁ POSSÍVEL EXCLUÍ-LO**.

