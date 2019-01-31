# Equipamentos

| | |
|-|-|
|**Descrição:**| É reponsável por manter os equipamentos que podem ser executados algum tipo de serviço. Equipamento, por definição, é um recurso que não se esgota facilmente.|
|**Finalidade:**| Será usada na Tela de **Ordem de Serviço**. |
|**Nome em Inglês:**|_equipments_.|

## Dependências

* Precisa está logado
* Precisa ter pelo menos um **Setor** cadastrado.
* Precisa ter pelo menos um **Fabricante** cadastrado.
* Precisa ter pelo menos um **Modelo** cadastrado.

!!! info "Informação"
    O cadastro de **Setor**, **Fabricante** ou **Modelo** podem ser realizados em suas respectivas telas, acessivéis no **menu lateral**.

## Campos

Nome|Descrição|Entrada de Dados|Restrições|Obrigatório|
:---|:--------|:---|:---|:---------:
**Nome do Equipamento**|Este campo mapea quais serão utilizadas nas OSs|<li>texto</li>|<li>Não permite espaços em branco</li><li>Deve conter no máximo 255 caracteres</li>|<span class="badge badge-pill badge-success">Sim</span>
**Setor**|É uma lista de setores previamente cadastrados|<li>números</li>|<li>Só pode ser selecionável</li>|<span class="badge badge-pill badge-success">Sim</span>
**Fabricante**|É uma lista de fabricantes previamente cadastrados|<li>números</li>|<li>Só pode ser selecionável</li>|<span class="badge badge-pill badge-success">Sim</span>
**Modelo**|Este campo irá agrupar os modelos, para filtrar nas telas associadas a Fabricante|<li>números</li>|<li>Só pode ser selecionável</li>|<span class="badge badge-pill badge-success">Sim</span>

## Regra de Cadastro e Atualização

1. Campo de **Modelo** deverá vir bloqueado para o Cadastro.
2. Quando o **Fabricante** for selecionado, o campo de **Modelo** deve ser desbloqueado, carregando os modelos referentes ao fabricante escolhido.
3. Não pode ter nomes iguais de **Equipamentos** para o mesmo **Setor**, **Fabricante** e **Modelo**.
4. A lista de **Modelos** carrega de acordo com  **Fabricante** escolhido.
5. Na atualização, todos os campos podem ser editáveis, desde que não conflite com o item 3 citado acima.

## Cadastrar

1. Clique no menu lateral <span class="btn-panel"><i class="material-icons">build</i> Equipamentos</span>;
2. Clique no ícone ![Botão de Adicionar](/assets/images/button_add.png);
3. No _popup_ de **Cadastrar**, preencha os campos conforme as definições da <a href="#campos">tabela acima</a>.
4. Clique em ![Botão de Salvar](/assets/images/button_save.png).

## Alterar

1. Clique no menu lateral <span class="btn-panel"><i class="material-icons">build</i> Equipamentos</span>;
2. Clique no ícone ![Botão de Atualizar](/assets/images/button_update.png), localizado na tabela.
3. No _popup_ de **Atualizar**,  preencha os campos conforme as definições da <a href="#campos">tabela acima</a>.
4. Clique em ![Botão de Atualizar](/assets/images/button_update_large.png).

!!! warning "Aviso"
    Se o nome do **Equipamentos** for igual a de uma já existente, você será alertado  
    `Este nome já existe! Tente outro.`

## Excluir

1. Clique no menu lateral <span class="btn-panel"><i class="material-icons">build</i> Equipamentos</span>;
2. Clique no ícone ![Botão de Deletar](/assets/images/button_delete.png), localizado na tabela.
3. Confirme, no _popup_, o item a ser deletado.
4. Clique em ![Botão de Deletar](/assets/images/button_delete_large.png).

!!! warning "Aviso"
    Caso o item esteja **vinculado**, **NÃO SERÁ POSSÍVEL EXCLUÍ-LO**.

## Detalhes

São mostrados através de um **clique** em cima da linha da tabela.  
No detalhes de equipamentos encontramos as **Peças** e **Ações** relacionadas ao equipamento.
Nele pode ser feita a **Adição e Remoção de Peças/Ações**.

!!! important "Informação"
    Escolha o tipo de Lista **Peças ou Ações** na coluna **LISTAS**, antes de fazer os procedimentos abaixo.

!!! danger "Importante"
    O diálogo de **Peças ou Ações** são semelhantes, mas são separados, por isso é importante selecionar o tipo da **LISTA**.

### Adicionar de Peças

1. Clique na **linha da tabela**  e aparecerá o **Botão de Adicionar Peças**.
2. Clique em ![Botão de Adicionar Peças](/assets/images/button_add_part.png).
3. No diálogo que aparecer, será listada as peças na tabela. **Marque** as **Peças** que deseja incluir e clique em em ![Botão de Salvar](/assets/images/button_save.png).

!!! info "Informação"
    Para ajudar a encontrar as **Peças**, no campo com uma Lupa (<i class="material-icons">search</i>) **Digite o nome da Peças** para filtrar a tabela listada logo abaixo do campo.

### Remover de Peças

1. Clique na **linha da tabela** e aparecerá o **Botão de Adicionar Peças**.
2. Clique em ![Botão de Adicionar Peças](/assets/images/button_add_part.png).
3. No diálogo que aparecer, será listada as peças na tabela. **Desmarque** as **Peças** que deseja excluir e clique em em ![Botão de Salvar](/assets/images/button_save.png).

!!! info "Informação"
    Para ajudar a encontrar as **Peças**, no campo com uma Lupa (<i class="material-icons">search</i>) **Digite o nome da Peças** para filtrar a tabela listada logo abaixo do campo.

### Adicionar de Ações

1. Clique na **linha da tabela**  e aparecerá o **Botão de Adicionar Ações**.
2. Clique em ![Botão de Adicionar Ações](/assets/images/button_add_action.png).
3. No diálogo que aparecer, será listada as peças na tabela. **Marque** as **Ações** que deseja incluir e clique em em ![Botão de Salvar](/assets/images/button_save.png).

!!! info "Informação"
    Para ajudar a encontrar as **Ações**, no campo com uma Lupa (<i class="material-icons">search</i>) **Digite o nome da Ações** para filtrar a tabela listada logo abaixo do campo.

### Remover de Ações

1. Clique na **linha da tabela** e aparecerá o **Botão de Adicionar Ações**.
2. Clique em ![Botão de Adicionar Ações](/assets/images/button_add_action.png).
3. No diálogo que aparecer, será listada as peças na tabela. **Desmarque** as **Ações** que deseja excluir e clique em em ![Botão de Salvar](/assets/images/button_save.png).

!!! info "Informação"
    Para ajudar a encontrar as **Ações**, no campo com uma Lupa (<i class="material-icons">search</i>) **Digite o nome da Ações** para filtrar a tabela listada logo abaixo do campo.