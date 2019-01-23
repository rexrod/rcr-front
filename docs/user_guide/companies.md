# Companhias

|   |   |
|---|---|
|**Descrição:**| Por definição, é o primeiro nível na hierarquia da companhia.|
|**Finalidade:**| A Tela de **Companhias** é vinculada a todos os elementos do sistema.|
|**Nome em Inglês:**|_companies_|
|**Serviço Padrão:**|_ws-sgm-companies_|
|**Status do Serviço:**|<span id="api-ws-sgm-companies" ><span class="badge badge-pill badge-secondary">Verificando...</span></span>|

## Dependências

* Precisa está logado e ter permissão.
* Para a primeira companhia cadastrada, deve estar logado como usuário Administrador

## Regra de Cadastro e Atualização

1. **Nome Fantasia** não pode ser igual a um existente.
3. **Razão Social** não pode ser igual a uma existente.
3. **CNPJ** não pode ser igual a uma existente.
4. Uma **Companhia** que possue filiais não pode ser apagada.
5. Na atualização, todos os campos podem ser editáveis, desde que não conflitem com os itens anteriores.

## Campos

Nome|Descrição|Entrada de Dados|Restrições|Obrigatório|
:---|:--------|:---|:---|:---------:
**Nome Fantasia**|É o nome comum de uma empresa|<li>texto</li>|<li>Não permite espaços em branco</li><li>Deve conter no máximo 255 caracteres</li>|<span class="badge badge-pill badge-success">Sim</span>
**Razão Social** |É o nome formal de uma empresa|<li>texto</li>|<li>Não permite espaços em branco</li><li>Deve conter no máximo 255 caracteres</li>|<span class="badge badge-pill badge-success">Sim</span>
**CNPJ**|É o registro único de uma empresa|<li>texto</li>|<li>Não permite espaços em branco</li><li>Deve conter no máximo 255 caracteres</li>|<span class="badge badge-pill badge-success">Sim</span>
**Registro Estadual**|É o número de registro concedido pelo estado|<li>texto</li>|<li>Não permite espaços em branco</li><li>Deve conter no máximo 255 caracteres</li>|<span class="badge badge-pill badge-success">Sim</span>
**Registro Municipal**|É o número de registro concedido pelo município|<li>texto</li>|<li>Não permite espaços em branco</li><li>Deve conter no máximo 255 caracteres</li>|<span class="badge badge-pill badge-success">Sim</span>
**Empresa Matriz**|Indica qual a empresa matriz a companhia pertence|<li>número</li>|<li>Aparece ao selecionar a opção _**Empresa Filial?**_</li><li>Só pode ser selecionável</li>|<span class="badge badge-pill badge-info">Não</span>
**Rua**|Descreve parte do Endereço|<li>texto</li>|<li>Não permite espaços em branco</li><li>Deve conter no máximo 255 caracteres</li>|<span class="badge badge-pill badge-success">Sim</span>
**Complemento**|Complemento do endereço|<li>texto</li>|<li>Não permite espaços em branco</li><li>Deve conter no máximo 255 caracteres</li>|<span class="badge badge-pill badge-success">Sim</span>
**Número**|Número do Endereço|<li>texto</li>|<li>Não permite espaços em branco</li><li>Deve conter no máximo 255 caracteres</li>|<span class="badge badge-pill badge-success">Sim</span>
**Cep**|CEP do endenreço|<li>texto</li>|<li>Não permite espaços em branco</li><li>Deve conter no máximo 255 caracteres</li>|<span class="badge badge-pill badge-success">Sim</span>
**Telefone**|Número para contatos gerais da companhia|<li>texto</li>|<li>Não permite espaços em branco</li><li>Deve conter no máximo 255 caracteres</li>|<span class="badge badge-pill badge-success">Sim</span>
**Nome de Contato**|Nome da pessoa a ser contatada|<li>texto</li>|<li>Não permite espaços em branco</li><li>Deve conter no máximo 255 caracteres</li>|<span class="badge badge-pill badge-success">Sim</span>
**Email**|Email geral da companhia|<li>texto</li>|<li>Não permite espaços em branco</li><li>Deve conter no máximo 255 caracteres</li>|<span class="badge badge-pill badge-success">Sim</span>

## Passo a passo

### Cadastrar

1. Clique no menu lateral <span class="btn-panel"><i class="material-icons">business</i> Companhias</span>;
2. Clique no ícone ![Botão de Adicionar](/assets/images/button_add.png);
3. No _popup_ de **Cadastrar**, preencha todos os campos conforme as orientações da <a href="#campos">tabela acima</a>.
4. Clique em ![Botão de Salvar](/assets/images/button_save.png).

!!! warning "Aviso"
    Se o **Nome Fantasia**, **Razão Social** ou **CNPJ** for igual a um já existente, você será alertado  
    `Este nome já existe! Tente outro.`

### Alterar

1. Clique no menu lateral <span class="btn-panel"><i class="material-icons">business</i> Companhias</span>;
2. Clique no ícone ![Botão de Atualizar](/assets/images/button_update.png), localizado na tabela.
3. No _popup_ de **Atualizar**,  preencha todos os campos conforme as orientações da <a href="#campos">tabela acima</a>.
5. Clique em ![Botão de Atualizar](/assets/images/button_update_large.png).

!!! warning "Aviso"
    Se o **Nome Fantasia**, **Razão Social** ou **CNPJ** for igual a um já existente, você será alertado  
    `Este nome já existe! Tente outro.`

### Excluir

1. Clique no menu lateral <span class="btn-panel"><i class="material-icons">business</i> Companhias</span>;
2. Clique no ícone ![Botão de Deletar](/assets/images/button_delete.png), localizado na tabela.
3. Confirme, no _popup_, o item a ser deletado.
4. Clique em ![Botão de Deletar](/assets/images/button_delete_large.png).

!!! warning "Aviso"
    Caso o item esteja **vinculado**, **NÃO SERÁ POSSÍVEL EXCLUÍ-LO**.

