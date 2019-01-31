# Peças

A Tela de **Peças** está vinculada diretamente ao **Equipamento**.  
É reponsável por manter os tipos de peças que cada equipamento utiliza.   
Será utilizada na Tela de **Equipamento** e **Ordem de Serviço**.  
Sua nomenclatura em **inglês** é _parts_.

## Dependências

* Precisa está logado
* Precisa ter pelo menos um **Fabricante** cadastrado.
* Precisa ter pelo menos um **Modelo** cadastrado.
* Precisa ter pelo menos um **Segmento** cadastrado.

!!! info "Informação"
    O cadastro de **Fabricante**, **Modelo** ou **Segmento** são feitos através de suas respectivas telas e estão disponíveis no menu lateral do sistema.

## Regras de Cadastro e Atualização

1. Campo de **Modelo** deverá vir bloqueado para o Cadastro.
2. Quando o **Fabricante** for selecionado, o campo de **Modelo** deve ser desbloqueado, carregando os modelos referentes ao fabricante escolhido.
3. Não pode ter nomes iguais de **Peças** com as mesmas configurações: **Nome da Peça**, **Número de Série**, **Modelo** e **Segmento** iguais.
4. Na atualização, todos os campos podem ser editáveis, desde que não conflite com o item 3 citado acima.
5. O campo **Exclusivo** não selecionado, é automaticamente considerado como "não".

## Campos

Nome|Descrição|Entrada de Dados|Restrições|Obrigatório|
:---|:--------|:---|:---|:---------:
**Nome da Peça**|Este campo mapea quais peças são utilizadas no equipamentos|<li>texto</li>|<li>Não permite espaços em branco</li><li>Deve conter no máximo 255 caracteres</li>|<span class="badge badge-pill badge-success">Sim</span>
**Número de Série**|É o número de série do equipamento|<li>texto</li>|<li>Não permite espaços em branco</li><li>Deve conter no máximo 255 caracteres</li>|<span class="badge badge-pill badge-success">Sim</span>
**Fabricante**|É uma lista de fabricantes previamente cadastrados|<li>números</li>|<li>Só pode ser selecionável</li>|<span class="badge badge-pill badge-success">Sim</span>
**Modelo**|Este campo irá agrupar os modelos, para filtrar nas telas associadas a Fabricante|<li>números</li>|<li>Só pode ser selecionável</li>|<span class="badge badge-pill badge-success">Sim</span>
**Segmento**|Este campo irá agrupar os tipos de segmentos existente no sistem, como elêtrico, mecânico...|<li>números</li>|<li>Só pode ser selecionável</li>|<span class="badge badge-pill badge-success">Sim</span>
**Fornecedor**|Se hover algum fornecedor, poderá ser informado neste campo|<li>Texto</li>|<li>Não permite somente espaços em branco</li>|<span class="badge badge-pill badge-success">Sim</span>
**Alimentação**|Caso a peça seja elétrica, define-se um valor de alimentação da peça|<li>números</li>|<li>Digitável</li>|<span class="badge badge-pill badge-info">Não</span>
**Exclusivo**|Diz se é uma peça exclusiva de um equipamento ou não|<li>boleano</li>|<li>Verdadeiro ou Falso</li>|<span class="badge badge-pill badge-success">Sim</span>
**Imagem da Peça**|Serve para selecionar uma ilustração do item|<li>arquivos</li>|<li>JPEG/JPG</li><li>PNG</li><li>GIF</li><li>BMP</li>|<span class="badge badge-pill badge-info">Não</span>

## Cadastrar

1. Clique no menu lateral <span class="btn-panel"><i class="material-icons">link</i> Peças</span>;
2. Clique no ícone ![Botão de Adicionar](/assets/images/button_add.png);
3. No _popup_ de **Cadastrar**, preencha os campos conforme as definições da <a href="#campos">tabela acima</a>;
4. Clique em ![Botão de Salvar](/assets/images/button_save.png).

!!! warning "Aviso"
    Se o nome de **Peças** for igual a de uma já existente, você será alertado  
    `Este nome já existe! Tente outro.`

!!! success
    Se qualquer um dos campos de **Nome da Peça**, **Número de Série**, **Modelo** ou **Segmento** forem diferentes que um já existente, o cadastro será permitido.

## Alterar

1. Clique no menu lateral <span class="btn-panel"><i class="material-icons">link</i> Peças</span>;
2. Clique no ícone ![Botão de Atualizar](/assets/images/button_update.png), localizado na tabela.
3. No _popup_ de **Atualizar**, modifique os campos conforme as definições da <a href="#campos">tabela acima</a>;
4. Clique em ![Botão de Atualizar](/assets/images/button_update_large.png).

!!! warning "Aviso"
    Se o nome de **Peças** for igual a de uma já existente, você será alertado  
    `Este nome já existe! Tente outro.`

!!! success "Informação"
    Se qualquer um dos campos de **Nome da Peça**, **Número de Série**, **Modelo** ou **Segmento** forem diferentes que um já existente, o cadastro será permitido.

## Excluir

1. Clique no menu lateral <span class="btn-panel"><i class="material-icons">link</i> Peças</span>;
2. Clique no ícone ![Botão de Deletar](/assets/images/button_delete.png), localizado na tabela.
3. Confirme, no _popup_, o item a ser deletado.
4. Clique em ![Botão de Deletar](/assets/images/button_delete_large.png).

!!! fail "Alerta"
    Caso o item esteja **vinculado**, **NÃO SERÁ POSSÍVEL EXCLUÍ-LO**.

## Detalhes

Para visualizar os detalhes, <u>clique em cima da linha da tabela</u>.