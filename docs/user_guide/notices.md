# Avisos

| | |
|-|-|
|**Descrição:**| Os avisos são responsável por informar o usuário de algum evento que é de interesse de todos. |
|**Finalidade:**| Será usado no **Dashboard**. |
|**Nome em Inglês:**|_notices_ <small>Notices</small>|
|**Exemplos:**|<h4><span class="badge badge-pill badge-warning">&nbsp;</span>&nbsp;&nbsp;&nbsp;&nbsp;Hoje é dia de 5S</h4><p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Favor, limpar suas mesas e separar o lixo corretamente.</p><small>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Expira em: 01/01/30</small>|

## Dependências

* Precisa está logado
* Precisa ter pelo menos uma **Prioridade de Avisos** cadastrada.

!!! note
    A  **Prioridade de Avisos** pode ser cadastrada na Tela de **Prioridades**, disponível no menu lateral do sistema.

## Campos

Nome|Descrição|Entrada de Dados|Restrições|Obrigatório|
:---|:--------|:---|:---|:---------:
**Prioridade**|Este campo irá ordenar os avisos conforme a prioridade escolhida, quanto maior a prioridade, mais destaque terá no Dashboard|<li>números</li>|<li>Só pode ser selecionável</li>|<span class="badge badge-pill badge-success">Sim</span>
**Descrição**|A descrição será o texto do aviso que será passado|<li>texto</li>|<li>Não permite espaços em branco</li><li>Deve conter no máximo 500 caracteres</li>|<span class="badge badge-pill badge-success">Sim</span>
**Hora**|Este campo é referente a hora que expirará seu aviso, sempre deve ser maior que a hora atual|<li>números</li>|<li>Não pode ser menor que a hora atual (a hora da sua máquina)</li>|<span class="badge badge-pill badge-success">Sim</span>
**Data**|Este campo é referente a data que expirará seu aviso, sempre deve ser maior que a data atual|<li>data</li>|<li>Não pode ser menor que a data atual (hoje)</li>|<span class="badge badge-pill badge-success">Sim</span>

## Cadastrar

1. Clique no menu lateral <span class="btn-panel"><i class="material-icons">add_alert</i> Avisos</span>;
2. Clique no ícone ![Botão de Adicionar](/assets/images/button_add.png);
3. No _popup_ de **Cadastrar**, preencha os campos conforme as definições da <a href="#campos">tabela acima</a>;
4. Clique em ![Botão de Salvar](/assets/images/button_save.png).

!!! warning "Aviso"
    A **Hora** não pode ser menor que a hora atual do mesmo dia. 

!!! info "Informação"
    Não há restrições de Avisos iguais.

## Alterar

1. Clique no menu lateral <span class="btn-panel"><i class="material-icons">add_alert</i> Avisos</span>;
2. Clique no ícone ![Botão de Atualizar](/assets/images/button_update.png), localizado na tabela.
3. No _popup_ de **Atualizar**, modifique os campos conforme as definições da <a href="#campos">tabela acima</a>;
4. Clique em ![Botão de Atualizar](/assets/images/button_update_large.png).

!!! warning "Aviso"
    A **Hora** não pode ser menor que a hora atual do mesmo dia. 

!!! info "Informação"
    Não há restrições de Avisos iguais.


## Excluir

1. Clique no menu lateral <span class="btn-panel"><i class="material-icons">add_alert</i> Avisos</span>;
2. Clique no ícone ![Botão de Deletar](/assets/images/button_delete.png), localizado na tabela.
3. Confirme, no _popup_, o item a ser deletado.
4. Clique em ![Botão de Deletar](/assets/images/button_delete_large.png).

!!! warning "Aviso"
    Caso o item esteja **vinculado**, **NÃO SERÁ POSSÍVEL EXCLUÍ-LO**.

## Detalhes

Na listagem da tabela, clique em cima da linha para mostrar mais detalhes, a **Descrição** no caso.