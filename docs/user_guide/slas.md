# SLA

| | |
|-|-|
|**Descrição:**| O SLA define um tempo máximo de atendimento para cada serviço. |
|**Finalidade:**| Será usado para priorizar os serviço pendentes. |
|**Nome em Inglês:**|_slas_ <small>SLAs</small>|
|**Exemplos:**|<li>10 minutos</li><li>1 hora</li><li>1 dia</li>|

## Dependências

* Precisa está logado.

!!! quote "Informação"
    Este módulo não possui dependências para cadastro e atualização.

## Regras de Cadastro e Atualização

1. Não pode ter nomes de **SLAs** iguais.

!!! important "Importante"
    O tempo cadastrado sempre é dado em minutos.

    !!! example "Exemplo"
        **1 hora** será **60 minutos**

## Campos

Nome|Descrição|Entrada de Dados|Restrições|Obrigatório|
:---|:--------|:---|:---|:---------:
**SLA**|Será cadastrado o nome de exibição para cada nível.|<li>número</li><li>texto</li>|<li>Deve haver **números** no ínicio, um **espaço** e **letras** ao final</li><li>Não permite espaços em branco</li><li>Deve conter no máximo 255 caracteres</li>|<span class="badge badge-pill badge-success">Sim</span>
**Tempo (em minutos)**|Será o tempo máximo em que cada atividade deverá ser realizada. É dado em minutos.|<li>número</li>|<li>Só permite números inteiros</li><li>Não permite espaços em branco</li>|<span class="badge badge-pill badge-success">Sim</span>

## Cadastrar

1. Clique no menu lateral <span class="btn-panel"><i class="material-icons">equalizer</i> SLAs</span>;
2. Clique no ícone ![Botão de Adicionar](/assets/images/button_add.png);
3. No _popup_ de **Cadastrar**, preencha os campos conforme as definições da <a href="#campos">tabela acima</a>;
4. Clique em ![Botão de Salvar](/assets/images/button_save.png).

!!! warning "Aviso"
    Se o nome de **SLA** for igual a de uma já existente, você será alertado   
    `Este nome já existe! Tente outro.`

## Alterar

1. Clique no menu lateral <span class="btn-panel"><i class="material-icons">equalizer</i> SLAs</span>;
2. Clique no ícone ![Botão de Atualizar](/assets/images/button_update.png), localizado na tabela.
3. No _popup_ de **Atualizar**, modifique os campos conforme as definições da <a href="#campos">tabela acima</a>;
4. Clique em ![Botão de Atualizar](/assets/images/button_update_large.png).

!!! warning "Aviso"
    Se o nome de **SLA** for igual a de uma já existente, você será alertado  
    `Este nome já existe! Tente outro.`

## Excluir

1. Clique no menu lateral <span class="btn-panel"><i class="material-icons">equalizer</i> SLAs</span>;
2. Clique no ícone ![Botão de Deletar](/assets/images/button_delete.png), localizado na tabela.
3. Confirme, no _popup_, o item a ser deletado.
4. Clique em ![Botão de Deletar](/assets/images/button_delete_large.png).

!!! fail "Alerta"
    Caso o item esteja **vinculado**, **NÃO SERÁ POSSÍVEL EXCLUÍ-LO**.