# Prioridade de Avisos

| | |
|-|-|
|**Descrição:**| Classifica os avisos quanto a prioridade. |
|**Finalidade:**| Classificar e ordenar os **Avisos**. |
|**Nome em Inglês:**|_notices_priorities_ <small>Notices Priority</small>|
|**Exemplos:**|<p><span class="badge badge-pill badge-danger">&nbsp;</span> Alto</p><p><span class="badge badge-pill badge-warning">&nbsp;</span> Baixo</p>|

## Dependências

* Precisa está logado.

!!! note "Informação"
    As **cores** da **Prioridade de Avisos** são fixas: vermelho, laranja e amarelo.

## Campos

Nome|Descrição|Entrada de Dados|Restrições|Obrigatório|
:---|:--------|:---|:---|:---------:
**Nível de Prioridade**|Nome de Exibição da Prioridade|<li>texto</li>|<li>Não permite espaços em branco</li><li>Deve conter no máximo 500 caracteres</li>|<span class="badge badge-pill badge-success">Sim</span>
**Cor**|Define a ordem da prioridade. As cores são fixas: vermelho, laranja e amarelo.|<li>números</li>|<li>Só pode ser selecionável</li>|<span class="badge badge-pill badge-success">Sim</span>


## Cadastrar

1. Clique no menu lateral <span class="btn-panel"><i class="material-icons">warning</i> Prioridade de Avisos</span>;
2. Clique no ícone ![Botão de Adicionar](/assets/images/button_add.png);
3. No _popup_ de **Cadastrar**, preencha os campos conforme as definições da <a href="#campos">tabela acima</a>;
4. Clique em ![Botão de Salvar](/assets/images/button_save.png).

!!! warning "Aviso"
    Se o **Nível de Prioridade** for igual a de uma já existente, você será alertado  
    `Este nome já existe! Tente outro.`

## Alterar

1. Clique no menu lateral <span class="btn-panel"><i class="material-icons">warning</i> Prioridade de Avisos</span>;
2. Clique no ícone ![Botão de Atualizar](/assets/images/button_update.png), localizado na tabela.
3. No _popup_ de **Atualizar**, modifique os campos conforme as definições da <a href="#campos">tabela acima</a>;
4. Clique em ![Botão de Atualizar](/assets/images/button_update_large.png).

!!! warning "Aviso"
    Se o **Nível de Prioridade** for igual a de uma já existente, você será alertado  
    `Este nome já existe! Tente outro.`

## Excluir

1. Clique no menu lateral <span class="btn-panel"><i class="material-icons">warning</i> Prioridade de Avisos</span>;
2. Clique no ícone ![Botão de Deletar](/assets/images/button_delete.png), localizado na tabela.
3. Confirme, no _popup_, o item a ser deletado.
4. Clique em ![Botão de Deletar](/assets/images/button_delete_large.png).

!!! warning "Aviso"
    Caso o item esteja **vinculado**, **NÃO SERÁ POSSÍVEL EXCLUÍ-LO**.
