# Exportar para PDF

Estes procedimentos devem ser feito na pasta **raíz** do projeto.  
Os procedimentos abaixo explicam como **rodar**, **gerar** e **exportar** a documentação criada com `mkdocs`.

!!! warning "Aviso"
    Estes procedimentos foram testados apenas com o `mkdocs` em tema `mkdocs-material`.

## Dependências
* Docker versão 18.09.0 ou superior

!!! info "Informação"
    Instale o `docker` conforme sua documentação em: [Get Docker CE for Ubuntu](https://docs.docker.com/install/linux/docker-ce/ubuntu/).

## Construindo o a imagem do docker
Caso seja necessário alterar o _container_ atual, mofique os arquivos `Dockerfile` ou `.dockerignore`, localizados na raíz do seu projeto.

Para **gerar a imagem**, digite:
```sh
docker build --tag sgmmkdocs docker/documentation
```

!!! important "Observação"
    A _tag_ `sgmmkdocs`, pode ser substituia pelo nome que você quiser. 

## Rodando o Server em Dev

Para **subir o servidor em ambiente de desenvolvimento**, rode o comando:
```sh
docker run -it --rm  -v ~/projects/sgm:/docs -p 8000:8000 sgmmkdocs
```

!!! info "Informação"
    Para substituir a porta padrão, basta modificar o argumento `-p 8000:8000` para `-p <ANYPORT>:8000`.


## Fazendo o _Build_ da Documentação

### Sem PDF

Para gerar a documentação **sem** os arquivos `.pdf`, execute:
```sh
docker run -it --rm  -v ~/projects/sgm:/docs sgmmkdocs build
```

### Com PDF

Para gerar a documentação **com** os arquivos `.pdf`, execute:
```sh
docker run -it --rm  -v ~/projects/sgm:/docs -e ENABLE_PDF_EXPORT=1 sgmmkdocs build
```

## Unindo os PDF's gerados com o _Build_

Esta opção serve somente para o _build_ [com PDF](#com-pdf).  

No projeto mkdocs, pasta `docs/`, cada arquivo `.md` gerará um `.pdf`, deixando todos arquivos separados e de forma desordenada.  

Para uní-los, usa-se a biblioteca `pdftk` e para organizá-los conforme o arquivo de configuração (`mkdocs.yml`), usa-se o script `export_to_pdf.sh` que encontra-se na raíz do projeto.

Dentro seu **diretório local** (pasta do projeto), **dê permissão ao script** que une os PDF's:
```sh
chmod +x export_to_pdf.sh
```

Agora, execute o comando abaixo para unir e organizar os PDF's gerados.
```sh
docker run -it --rm  -v ~/projects/sgm:/docs --entrypoint './export_to_pdf.sh' sgmmkdocs
```

## Acessando o _container_

Para entrar na linha de comando do _container_, basta sobrescrever o `ENTRYPOINT` com o comando:

```sh
docker run -it --rm  --entrypoint '/bin/bash' sgmmkdocs
```

!!! info "Informação"
    Este procedimento só funciona após o gerar a imagem do _container_ com o nome `sgmmkdocs`.

## Dockerfile

```dockerfile
FROM ubuntu:bionic

ENV ENABLE_PDF_EXPORT=false
ENV LANG=C.UTF-8

# Atualizando o repositório
RUN apt-get update && apt-get upgrade -y

# Dependências
RUN apt-get install build-essential \
python3-dev \
python3-pip \
python3-setuptools \
python3-wheel \
python3-cffi \
libcairo2 \
libpango-1.0-0 \
libpangocairo-1.0-0 \
libgdk-pixbuf2.0-0 \
libffi-dev \
shared-mime-info -y

RUN apt-get install software-properties-common -y

# Instalando o mkdocs e o tema material
RUN pip3 install mkdocs-material
RUN pip3 install mkdocs-pdf-export-plugin

# Instalando o pdftk
RUN add-apt-repository ppa:malteworld/ppa -y
RUN apt-get install pdftk -y

# Setando diretório padrão
WORKDIR /docs

# Expose MkDocs development server port
EXPOSE 8000

# Start development server by default
ENTRYPOINT ["mkdocs"]
CMD ["serve", "--dev-addr=0.0.0.0:8000"]
```

## Script `export_to_pdf.sh`

```sh
#!/bin/bash

#########################################################################
# Este script serve para unir e organizar os PDF's exportado pelo build #
#########################################################################

# idiomatic parameter and option handling in sh
while test $# -gt 0
do
    case "$1" in
        -f|--file) 
            if [ ! -z "$2" ]
                then
                    config_file="$2"
                    # echo  $config_file
                    shift
                else
                    echo "Insira o arquivo de configuração .yml no valor da opção -f"
                    exit 1
            fi
            ;; #$config_file=$2 && echo $config_file 
        -o|--output) 
            if [ ! -z "$2" ]
                then
                    output="$2"
                    # echo  $config_file
                    shift
                else
                    echo "Insira o nome do arquivo de saída da opção -o"
                    exit 1
            fi
            ;;  
        -d|--directory) 
            if [ ! -z "$2" ]
                then
                    prefix="$2"
                    # echo  $config_file
                    shift
                else
                    echo "Digite o nome da  pasta do buil para a opção -d"
                    exit 1
            fi
            ;;
        -h|--help) echo -e "Use: mkdocs2pdf [OPÇÕES]... \n\
Opções:\n\
    -f, --file      nome do arquivo de configuração. default: mkdocs.yml \n\
    -o, --output    nome do arquivo de saída. default: output.pdf \n\
    -d, --directory diretório build. default: site"
                    exit 1
            ;;
        --*) echo "A opção $1 não existe"
            ;;
        -*) echo "A opção $1 não existe"
            ;;
        *) echo "Argumento sem opção: $1"
            exit 1
            ;;
    esac
    shift
done
# Se não setar o arquivo de configuração com -f, verifica se existe o arquivo de configuração padrão
[[ -z "$config_file" ]] && config_file=`find . -iname "mkdocs.yml" | sed "s/.\///g"`

# Se não conter o arquivo de configuração padrão, para o script
[[ -z "$config_file" ]] && echo -e "Arquivo de configuração não encontrado.
Verifique se você está na raiz do seu projeto.
Use a opção -f para especificar o arquivo de configuração.
default: mkdocs.yml" && exit 1

# verifica se tem prefixo diferente do padrão (pasta build)
[[ -z "$prefix" ]] && prefix=`grep -E -o "site_dir\:.?.*" $config_file | grep -E -o "\w*$"`

# se não houver pasta build, seta a pasta padrão
[[ -z "$prefix" ]] && prefix="site"

# verifica se a pasta do build existe
if ls $prefix &> /dev/null; then
    printf 'Pasta build encontrada!\n'
else
    printf 'Pasta build inexistente\nPara fazer o build, execute o  comando:\nmkdocs build\nOu use a opção -p para especificar o diretório.\n'
    exit 1
fi

color_white='\033[01;37m'
color_normal='\033[00;37m'
# verifica se o pdftk está instalado
if which pdftk &> /dev/null; then echo -e "As depedências estão ${color_white}OK$color_normal"; else echo -e "Depedências:
 ${color_white}pdftk$color_normal não está instalado.
Para instalá-lo no Ubuntu 18.04, execute:
 sudo add-apt-repository ppa:malteworld/ppa
 sudo apt update
 sudo apt install pdftk"; exit 1; fi

echo "Ordenando a lista conforme o arquivo de configuração."
# Adicionado números para controlar a ordem dos arquivos nos arquivo index
# Os arquivo index não tem subdiretorio, por isso são separado dos demais
index_with_numbers=`grep -E -o "'?((\w*)\/)*(\w*.md)'?$" $config_file | sed "s/'//g" | sed "s/md/pdf/g" | sed "s/^/$prefix\//g" | grep -En ".*index.pdf$"`

echo "Adicionando subdiretório aos PDFs gerados conforme a lista ordenada."
order_files_with_numbers_formatted=`grep -E -o "'?((\w*)\/)*(\w*.md)'?$" $config_file | sed "s/'//g" | sed "s/md/pdf/g" | sed "s/^/$prefix\//g" | grep -Env ".*index.pdf$" | sed -e "s/\(\w*\).pdf$/\1\/\1.pdf/g"`

echo "Formatando a lista ordenada para comparar com os arquivos PDFs existentes."
# Removendo o número de ordenação da lista ordenada
list_ordened_without_numbers=`echo $index_with_numbers $order_files_with_numbers_formatted | tr ' ' '\n' | sort -n | sed "s/^[0-9]*://g"`

# verifica os arquivos gerados
echo "Verificando arquivos PDFs existentes..."
list_generated_files_ordened=`find $prefix -iname "*.pdf" | sed "s/\.\///g" | sort`
[[ -z "$list_generated_files_ordened" ]] && echo "Não há arquivos pdf gerado com o build.
Execute o comando abaixo para exportar a variável de ambiente que habilita a exportação do buil com pdf. 
 export ENABLE_PDF_EXPORT=1
Obs: Não esqueça de fazer o build novamente." && exit 1

# compara o que está na configuração e o que foi gerado
echo "Comparando os arquivos existentes com a lista ordenada."
files_not_generated=`echo $list_generated_files_ordened $list_ordened_without_numbers | tr ' ' '\n' | sort | uniq -u`

# formata a diferença para expressão regular
echo "Excluindo PDFs não gerados da lista ordenada."
regex=$(echo $files_not_generated | sed "s/\\//\\\\\//g" | tr ' ' '|')

# remove os arquivos que não existem
echo "Gerando lista ordenada final."
if [ -n "$regex" ]; then
    result_files=`echo $list_ordened_without_numbers | sed -E "s/$regex//g"`
else
    result_files=$list_ordened_without_numbers
fi

# verifica se tem arquivo de saída e seta o padrão
[[ -z "$output" ]] && output="output.pdf"

# une todos os pdf a partir da lista
echo "Unindo os PDFs com o pdftk"
if pdftk $result_files cat output $output; then
    echo -e "${color_white}Sucesso! PDF gerado para $output.$color_normal"
    exit 1
else
    echo -e "Erros ocorreram na geração do arquivo\n${color_white}PDF NÃO FOI GERADO! :($color_normal"
    exit 1
fi
```