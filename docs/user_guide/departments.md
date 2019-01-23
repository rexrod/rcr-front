# Departamentos
| | |
|-|-|
|**Descrição:**| É o terceiro nível de uma companhia.  |
|**Finalidade:**| Será usado para mapear e restringir aréas em uma compnhia. |
|**Nome em Inglês:**|_departments_ <small>Departments</small>|
|**Exemplos:**|Software, Hardware, Recursos Humanos...|

## Dependências

* Precisa está logado.
* Precisa de pelo menos uma **Área** Cadastrada.

!!! info "Informação"
    O cadastro de **Área** por ser feito por um **Administrador** através do menu lateral.

## Regra de Cadastro e Atualização

1. Não pode ter nomes iguais para a mesma **Área**.
2. Na atualização, todos os campos podem ser editáveis, não conflitando com o item acima.


## Campos

Nome|Descrição|Entrada de Dados|Restrições|Obrigatório|
:---|:--------|:---|:---|:---------:
**Nome do Departamento**|Nome referente ao terceiro nível de uma companhia.|<li>texto</li>|<li>Não permite espaços em branco</li><li>Deve conter no máximo 255 caracteres</li><li>Não pode ser repetio para mesma Área</li>|<span class="badge badge-pill badge-success">Sim</span>
**Área**|Nome da Área a qual o departamento pertence.|<li>número</li>|<li>Só pode ser selecionável</li>|<span class="badge badge-pill badge-success">Sim</span>

## Passo a passo

### Cadastrar

1. Clique no menu lateral <span class="btn-panel"><i class="material-icons">straighten</i> Peças</span>;
2. Clique no ícone ![Botão de Adicionar](/assets/images/button_add.png);
3. No _popup_ de **Cadastrar**, preencha os campos conforme as definições da <a href="#campos">tabela acima</a>;
4. Clique em ![Botão de Salvar](/assets/images/button_save.png).

!!! warning "Aviso"
    Se o nome do **Departamento** e da **Área** for igual a de uma já existente, você será alertado  
    `Este nome já existe! Tente outro.`

### Alterar

1. Clique no menu lateral <span class="btn-panel"><i class="material-icons">straighten</i> Peças</span>;
2. Clique no ícone ![Botão de Atualizar](/assets/images/button_update.png), localizado na tabela.
3. No _popup_ de **Atualizar**, modifique os campos conforme as definições da <a href="#campos">tabela acima</a>;
4. Clique em ![Botão de Atualizar](/assets/images/button_update_large.png).

!!! warning "Aviso"
    Se o nome do **Departamento** e da **Área** for igual a de uma já existente, você será alertado  
    `Este nome já existe! Tente outro.`

### Excluir

1. Clique no menu lateral <span class="btn-panel"><i class="material-icons">straighten</i> Peças</span>;
2. Clique no ícone ![Botão de Deletar](/assets/images/button_delete.png), localizado na tabela.
3. Confirme, no _popup_, o item a ser deletado.
4. Clique em ![Botão de Deletar](/assets/images/button_delete_large.png).

!!! warning "Aviso"
    Caso o item esteja **vinculado**, **NÃO SERÁ POSSÍVEL EXCLUÍ-LO**.