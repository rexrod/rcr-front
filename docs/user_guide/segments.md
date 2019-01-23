# Segmento

| | |
|-|-|
|**Descrição:**| É responsável por agrupar os tipos de Segmentos. |
|**Finalidade:**| Será usado para mapear os tipos de serviços realizados. |
|**Nome em Inglês:**|_segments_ <small>Segments</small>|
|**Exemplos:**|<li>Mecânico</li><li>Elétrico</li><li>Hidráulico</li><li>Predial</li>|

## Dependências

* Precisa está logado.

!!! quote "Informação"
    Este módulo não possui dependências para cadastro e atualização.

## Regras de Cadastro e Atualização

1. Não pode ter nomes de **Segmentos** iguais.

## Campos

Nome|Descrição|Entrada de Dados|Restrições|Obrigatório|
:---|:--------|:---|:---|:---------:
**Nome do Segmento**|Este campo irá agrupar os tipos de segmentos existente no sistema, como elêtrico, mecânico...|<li>texto</li>|<li>Não permite espaços em branco</li><li>Deve conter no máximo 255 caracteres</li>|<span class="badge badge-pill badge-success">Sim</span>

## Cadastrar

1. Clique no menu lateral <span class="btn-panel"><i class="material-icons">compare_arrows</i> Segmentos</span>;
2. Clique no ícone ![Botão de Adicionar](/assets/images/button_add.png);
3. No _popup_ de **Cadastrar**, preencha os campos conforme as definições da <a href="#campos">tabela acima</a>;
4. Clique em ![Botão de Salvar](/assets/images/button_save.png).

!!! warning "Aviso"
    Se o nome de **Segmento** for igual a de uma já existente, você será alertado `Este nome já existe! Tente outro.`

## Alterar

1. Clique no menu lateral <span class="btn-panel"><i class="material-icons">compare_arrows</i> Segmentos</span>;
2. Clique no ícone ![Botão de Atualizar](/assets/images/button_update.png), localizado na tabela.
3. No _popup_ de **Atualizar**, modifique os campos conforme as definições da <a href="#campos">tabela acima</a>;
4. Clique em ![Botão de Atualizar](/assets/images/button_update_large.png).

!!! warning "Aviso"
    Se o nome de **Segmento** for igual a de uma já existente, você será alertado  
    `Este nome já existe! Tente outro.`

## Excluir

1. Clique no menu lateral <span class="btn-panel"><i class="material-icons">compare_arrows</i> Segmentos</span>;
2. Clique no ícone ![Botão de Deletar](/assets/images/button_delete.png), localizado na tabela.
3. Confirme, no _popup_, o item a ser deletado.
4. Clique em ![Botão de Deletar](/assets/images/button_delete_large.png).

!!! fail "Alerta"
    Caso o item esteja **vinculado**, **NÃO SERÁ POSSÍVEL EXCLUÍ-LO**.