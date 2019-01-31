# Unidades de Medida

| | |
|-|-|
|**Descrição:**| É responsavel por cadastrar as unidades de medidas, o nome e a sigla.  |
|**Finalidade:**| Será usado em todas a telas que necessitem mostrar unidades, como na **Tela de OS**. |
|**Nome em Inglês:**|_measures_units_ <small>Measure's Units</small>|
|**Exemplos:**|Quilomêtro (KM), Metro (M), Litro (L), Decibel (dB), Milivolt (mV)|

## Dependências

* Precisa está logado.

!!! info "Informação"
    Este cadastro não contém dependências visíveis ao usuário.

## Regra de Cadastro e Atualização

1. Não pode ter nomes iguais em nenhuma situação.
1. Na atualização, todos os campos podem ser editáveis, não conflitando com o item acima.
2. O campo de **Sigla** é limitado a 10 caracteres.


## Campos

Nome|Descrição|Entrada de Dados|Restrições|Obrigatório|
:---|:--------|:---|:---|:---------:
**Nome da Unidade de Medida**|Nome da unidade por extenso|<li>texto</li>|<li>Não permite espaços em branco</li><li>Deve conter no máximo 255 caracteres</li><li>Não pode se repetir</li>|<span class="badge badge-pill badge-success">Sim</span>
**Sigla**|Sigla da Unidade|<li>texto</li>|<li>Não permite espaços em branco</li><li>Deve conter no máximo 10 caracteres</li><li>Não pode se repetir</li>|<span class="badge badge-pill badge-success">Sim</span>

## Cadastrar

1. Clique no menu lateral <span class="btn-panel"><i class="material-icons">straighten</i> Peças</span>;
2. Clique no ícone ![Botão de Adicionar](/assets/images/button_add.png);
3. No _popup_ de **Cadastrar**, preencha os campos conforme as definições da <a href="#campos">tabela acima</a>;
4. Clique em ![Botão de Salvar](/assets/images/button_save.png).

!!! warning "Aviso"
    Se o nome da **Unidade de Medida** e da **Sigla** for igual a de uma já existente, você será alertado  
    `Este nome já existe! Tente outro.`

## Alterar

1. Clique no menu lateral <span class="btn-panel"><i class="material-icons">straighten</i> Peças</span>;
2. Clique no ícone ![Botão de Atualizar](/assets/images/button_update.png), localizado na tabela.
3. No _popup_ de **Atualizar**, modifique os campos conforme as definições da <a href="#campos">tabela acima</a>;
4. Clique em ![Botão de Atualizar](/assets/images/button_update_large.png).

!!! warning "Aviso"
    Se o nome da **Unidade de Medida** e da **Sigla** for igual a de uma já existente, você será alertado  
    `Este nome já existe! Tente outro.`

## Excluir

1. Clique no menu lateral <span class="btn-panel"><i class="material-icons">straighten</i> Peças</span>;
2. Clique no ícone ![Botão de Deletar](/assets/images/button_delete.png), localizado na tabela.
3. Confirme, no _popup_, o item a ser deletado.
4. Clique em ![Botão de Deletar](/assets/images/button_delete_large.png).

!!! warning "Aviso"
    Caso o item esteja **vinculado**, **NÃO SERÁ POSSÍVEL EXCLUÍ-LO**.