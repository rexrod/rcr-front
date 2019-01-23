# Atividades

| | |
|-|-|
|**Descrição:**| É a ação que será feita para cada equipamento, ferramenta ou máquina. |
|**Finalidade:**| Será utilizado na tela de **Equipamentos** e na tela de **Manutenção Preventiva**. |
|**Nome em Inglês:**|_activities_ <small>Activities</small>|
|**Exemplos:**|<li>Realizar medição de corrente e registrar medição</li>|

## Dependências

* Precisa está logado.
* Precisa ter pelo menos uma **Periodicidade** cadastrada.
* Precisa ter pelo menos um **Tipo de OS** cadastrada.
* Precisa ter pelo menos uma **Equipe** cadastrada.

## Regras de Cadastro e Atualização

1. A **Descrição da Atividade** não pode ser igual para o mesmo **Tipo de OS**.

## Campos

Nome|Descrição|Entrada de Dados|Restrições|Obrigatório|
:---|:--------|:---|:---|:---------:
**Descrição da Atividade**|Descrição sucinta da Atividade|<li>texto</li>|<li>Não permite espaços em branco</li><li>Deve conter no máximo 255 caracteres</li>|<span class="badge badge-pill badge-success">Sim</span>
**Periodicidade**|É a frequência que a atividade deverá ser executada. Ex: Semanal, Mensal, Anual...|<li>números</li>|<li>Só pode ser selecionável</li>|<span class="badge badge-pill badge-success">Sim</span>
**Tipos de OS**|Tipo da Ordem de Serviço que será utilizada esta atividade. Ex: Preventiva, Corretiva...|<li>números</li>|<li>Só pode ser selecionável</li>|<span class="badge badge-pill badge-success">Sim</span>
**Equipe**|Tipo de equipe que irá executar a atividade. Ex: Interna ou Externa|<li>números</li>|<li>Só pode ser selecionável</li>|<span class="badge badge-pill badge-success">Sim</span>
**Observação**|Contém mais detalhes das atividades.|<li>Área de Texto</li>|<li>Não permite espaços em branco</li><li>Deve conter no máximo 500 caracteres</li>|<span class="badge badge-pill badge-success">Sim</span>

## Cadastrar

1. Clique no menu lateral <span class="btn-panel"><i class="material-icons">list</i> Atividades</span>;
2. Clique no ícone ![Botão de Adicionar](/assets/images/button_add.png);
3. No _popup_ de **Cadastrar**, preencha os campos conforme as definições da <a href="#campos">tabela acima</a>;
4. Clique em ![Botão de Salvar](/assets/images/button_save.png).

!!! warning "Aviso"
    Se a Descrição da **Atividade** for igual a de uma já existente, você será alertado  
    `Este nome já existe! Tente outro.`

## Alterar

1. Clique no menu lateral <span class="btn-panel"><i class="material-icons">list</i> Atividades</span>;
2. Clique no ícone ![Botão de Atualizar](/assets/images/button_update.png), localizado na tabela.
3. No _popup_ de **Atualizar**, modifique os campos conforme as definições da <a href="#campos">tabela acima</a>;
4. Clique em ![Botão de Atualizar](/assets/images/button_update_large.png).

!!! warning "Aviso"
    Se a Descrição da **Atividade** for igual a de uma já existente, você será alertado  
    `Este nome já existe! Tente outro.`

## Excluir

1. Clique no menu lateral <span class="btn-panel"><i class="material-icons">list</i> Atividades</span>;
2. Clique no ícone ![Botão de Deletar](/assets/images/button_delete.png), localizado na tabela.
3. Confirme, no _popup_, o item a ser deletado.
4. Clique em ![Botão de Deletar](/assets/images/button_delete_large.png).

!!! fail "Alerta"
    Caso o item esteja **vinculado**, **NÃO SERÁ POSSÍVEL EXCLUÍ-LO**.