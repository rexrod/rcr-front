# Setor

| | |
|-|-|
|**Descrição:**| É o quarto de último nível dentro de uma companhia. |
|**Finalidade:**| Será usado como referência dentro de um **Departamento**. |
|**Nome em Inglês:**|_sectors_ <small>Sectors</small>|
|**Exemplos:**|Departamento: <b>Software</b><li>Banco de Dados</li><li>Desenvolvimento</li>|

## Dependências

* Precisa está logado.
* Precisa ter pelo menos um **Departamento** cadastrado.

## Regras de Cadastro e Atualização

1. O **Nome do Setor** não pode ser igual para o mesmo **Departamento**.

## Campos

Nome|Descrição|Entrada de Dados|Restrições|Obrigatório|
:---|:--------|:---|:---|:---------:
**Nome da Setor**|Nome do setor dentro de um Departamento|<li>texto</li>|<li>Não permite espaços em branco</li><li>Deve conter no máximo 255 caracteres</li>|<span class="badge badge-pill badge-success">Sim</span>
**Departamento**|Responsável por filtrar a qual departamento cada setor pertence.|<li>números</li>|<li>Só pode ser selecionável</li>|<span class="badge badge-pill badge-success">Sim</span>

## Cadastrar

1. Clique no menu lateral <span class="btn-panel"><i class="material-icons">my_location</i> Setores</span>;
2. Clique no ícone ![Botão de Adicionar](/assets/images/button_add.png);
3. No _popup_ de **Cadastrar**, preencha os campos conforme as definições da <a href="#campos">tabela acima</a>;
4. Clique em ![Botão de Salvar](/assets/images/button_save.png).

!!! warning "Aviso"
    Se o nome do **Setor** for igual a de uma já existente, você será alertado  
    `Este nome já existe! Tente outro.`

## Alterar

1. Clique no menu lateral <span class="btn-panel"><i class="material-icons">my_location</i> Setores</span>;
2. Clique no ícone ![Botão de Atualizar](/assets/images/button_update.png), localizado na tabela.
3. No _popup_ de **Atualizar**, modifique os campos conforme as definições da <a href="#campos">tabela acima</a>;
4. Clique em ![Botão de Atualizar](/assets/images/button_update_large.png).

!!! warning "Aviso"
    Se o nome do **Setor** for igual a de uma já existente, você será alertado  
    `Este nome já existe! Tente outro.`

## Excluir

1. Clique no menu lateral <span class="btn-panel"><i class="material-icons">my_location</i> Setores</span>;
2. Clique no ícone ![Botão de Deletar](/assets/images/button_delete.png), localizado na tabela.
3. Confirme, no _popup_, o item a ser deletado.
4. Clique em ![Botão de Deletar](/assets/images/button_delete_large.png).

!!! fail "Alerta"
    Caso o item esteja **vinculado**, **NÃO SERÁ POSSÍVEL EXCLUÍ-LO**.