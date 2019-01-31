# Título de Ordem de Serviço

| | |
|-|-|
|**Descrição:**|O **Título de Ordem de Serviço** é responsável por mapear que serviços estão sendo executados. Está diretamente associado com o **Segmento**. |
|**Finalidade:**|Será utilizado na tela de **Ordem de Serviço**.  |
|**Nome em Inglês:**|_service-order-titles_<small> Order of Service Titles</small>|
|**Exemplos:**|Troca de Lâmpada.|

## Dependências

* Precisa está logado
* Precisa ter pelo menos um **Segmento** cadastrado.

!!! info "Informação"
    O  **Segmento** pode ser cadastrado na Tela de **Segmento**, disponível no menu lateral do sistema.


## Regra de Cadastro e Atualização

1. Campo de **Título de OS** deverá vir bloqueado para o Cadastro.
2. Quando o **Segmento** for selecionado, o campo de **Título de OS** deve ser desbloqueado.
3. Não pode ter nomes iguais de **Título de OS** para o mesmo **Segmento**, mas é permitido nomes iguais para segmentos diferentes.

!!! note "Observação"
    Essa ordem de preenchimento dos campos é necessária por que o **Segmento** é um parâmetro obrigatório para pesquisar nomes iguais do mesmo segmento.

## Campos

Nome|Descrição|Entrada de Dados|Restrições|Obrigatório|
:---|:--------|:---|:---|:---------:
**Segmento**|Este campo irá agrupar os tipos de segmentos existente no sistem, como elêtrico, mecânico...|<li>números</li>|<li>Só pode ser selecionável</li>|<span class="badge badge-pill badge-success">Sim</span>
**Título de OS**|É o nome do título que será um campo selecionável na Tela de OS|<li>texto</li>|<li>Não permite espaços em branco</li><li>Deve conter no máximo 255 caracteres</li>|<span class="badge badge-pill badge-success">Sim</span>

## Cadastrar

1. Clique no menu lateral <span class="btn-panel"><i class="material-icons">title</i>Título de OS</span>;
2. Clique no ícone ![Botão de Adicionar](/assets/images/button_add.png);
3. No _popup_ de **Cadastrar**, modifique os campos conforme as definições da <a href="#campos">tabela acima</a>;
6. Clique em ![Botão de Salvar](/assets/images/button_save.png).

## Alterar

1. Clique no menu lateral <span class="btn-panel"><i class="material-icons">title</i>Título de OS</span>;
2. Clique no ícone ![Botão de Atualizar](/assets/images/button_update.png), localizado na tabela.
3. No _popup_ de **Atualizar**, modifique os campos conforme as definições da <a href="#campos">tabela acima</a>;
4. Clique em ![Botão de Atualizar](/assets/images/button_update_large.png).

!!! warning "Aviso"
    Se o nome de **Título de OS** for igual a de um **Segmento** existente, você será alertado  
    `Este nome já existe! Tente outro.`

## Excluir

1. Clique no menu lateral <span class="btn-panel"><i class="material-icons">title</i>Título de OS</span>;
2. Clique no ícone ![Botão de Deletar](/assets/images/button_delete.png), localizado na tabela.
3. Confirme, no _popup_, o item a ser deletado.
4. Clique em ![Botão de Deletar](/assets/images/button_delete_large.png).

!!! warning "Aviso"
    Caso o item esteja **vinculado**, **NÃO SERÁ POSSÍVEL EXCLUÍ-LO**.

