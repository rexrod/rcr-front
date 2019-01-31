# Modelo

A Tela de **Modelo** está vinculado diretamente ao **Fabricante**.  
É reponsável por determinar o tipo de produto ou equipamento.   
Será utilizado na Tela de **Equipamento** e **Peças**.  
Sua nomenclatura em **inglês** é _models_.

## Dependências

* Precisa está logado
* Precisa ter pelo menos um **Fabricante** cadastrado.

!!! info "Informação"
    O  **Fabricante** pode ser cadastrado na Tela de **Fabricante**, disponível no menu lateral do sistema.


## Regra de Cadastro e Atualização

1. Campo de **Nome do Modelo** deverá vir bloqueado para o Cadastro.
2. Quando o **Fabricante** for selecionado, o campo de **Nome do Modelo** deve ser desbloqueado.
3. Não pode ter nomes iguais de **Modelos** para o mesmo **Fabricante**, mas é permitido nomes iguais para fabricantes diferentes.
4. Na atualização, poderá atualizar tanto o **Modelo** quanto o **Fabricante**.

## Campos

Nome|Descrição|Entrada de Dados|Restrições|Obrigatório|
:---|:--------|:---|:---|:---------:
**Fabricante**|É uma lista de fabricantes previamente cadastrados|<li>números</li>|<li>Só pode ser selecionável</li>|<span class="badge badge-pill badge-success">Sim</span>
**Nome do Modelo**|Este campo irá agrupar os modelos, para filtrar nas telas associadas a Fabricante|<li>texto</li>|<li>Não permite espaços em branco</li><li>Deve conter no máximo 255 caracteres</li>|<span class="badge badge-pill badge-success">Sim</span>

## Cadastrar

1. Clique no menu lateral <span class="btn-panel"><i class="material-icons">device_hub</i> Modelos</span>;
2. Clique no ícone ![Botão de Adicionar](/assets/images/button_add.png);
3. No _popup_ de **Cadastrar**, preencha os campos conforme as definições da <a href="#campos">tabela acima</a>.
4. Clique em ![Botão de Salvar](/assets/images/button_save.png).

## Alterar

1. Clique no menu lateral <span class="btn-panel"><i class="material-icons">device_hub</i> Modelos</span>;
2. Clique no ícone ![Botão de Atualizar](/assets/images/button_update.png), localizado na tabela.
3. No _popup_ de **Atualizar**, modifique os campos conforme as definições da <a href="#campos">tabela acima</a>.
4. Clique em ![Botão de Atualizar](/assets/images/button_update_large.png).

!!! warning "Aviso"
    Se o nome de **Modelo** e **Fabricante** associado for igual a de um já existente, você será alertado  
    `Este nome já existe! Tente outro.`

## Excluir

1. Clique no menu lateral <span class="btn-panel"><i class="material-icons">device_hub</i> Modelos</span>;
2. Clique no ícone ![Botão de Deletar](/assets/images/button_delete.png), localizado na tabela.
3. Confirme, no _popup_, o item a ser deletado.
4. Clique em ![Botão de Deletar](/assets/images/button_delete_large.png).

!!! warning "Aviso"
    Caso o item esteja **vinculado**, **NÃO SERÁ POSSÍVEL EXCLUÍ-LO**.

