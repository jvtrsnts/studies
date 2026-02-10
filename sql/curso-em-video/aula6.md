# Aula 6 - Alterando a Estrutura da Tabela

<br>

- **Alterar um Tabela:**
    - *Adicionar coluna na ultima:*
        ~~~sql
        alter table pessoas -- Indica que quer alterar a tabela pessoas ...
        add column profissao varchar(10); -- ... adicionando uma coluna no final
        ~~~

    <br>

    - *Adicionar coluna em uma posição:*
        ~~~sql
        alter table pessoas -- Indica que quer alterar a tabela pessoas ...
        add column profissao varchar(10) after nome; -- ... adicionando uma coluna depois de nome
        ~~~

    <br>

    - *Adicionar coluna na primeira posição:*
        ~~~sql
        alter table pessoas -- Indica que quer alterar a tabela pessoas ...
        add column profissao varchar(10) first; -- ... adicionando uma coluna no começo
        ~~~

    <br>

    - *Remover coluna:*
        ~~~sql
        alter table pessoas -- Indica que quer alterar a tabela pessoas ...
        drop column profissao; -- ... removendo uma coluna
        ~~~
    
    <br>
    
    - *Modificar coluna:*
        ~~~sql
        alter table pessoas --Indica que quer alterar a tabela pessoas ...
        modify column profissao varchar(20); ... --... modificando uma coluna
        
        -- OU

        alter table pessoas --Indica que quer alterar a tabela pessoas ...
        modify column profissao varchar(20) not null default ''; ... --modificando uma coluna
        --Como a coluna ja foi inserida com campos nulos, é necessario corrigir essa imcompatibilidade
        --Uma constraint não pode passar por cima da outra
        ~~~
        
        - Permite redefinir constraints, tipos, etc
        - **EXCETO O NOME DA COLUNA**

    <br>

    - *Alterar nome da coluna:*:
        ~~~sql
        alter table pessoas --Indica que quer alterar a tabela pessoas ...
        change column profissao prof varchar(20); --... mudando a coluna por completo
        --Não salva as constraints, tem que inserir novamente
        ~~~

    - *Alterar nome da tabela:*
        ~~~sql
        alter table pessoas --Indica que quer alterar a tabela pessoas ...
        rename to gafanhotos; --... mudando seu nome
        ~~~

    - *Adicionando primary key:*
        ~~~sql
        alter table cursos --Indica que quer alterar a tabela cursos ...
        add column idcurso int first, --... adicionando a coluna idcurso na primeira posição ...
        add primary key (idcurso); --... como uma primary key
        ~~~

<br>

- **Criando mais tabelas:**
    ~~~sql
    create table if not exists cursos (
        nome varchar(30) not null unique, --não nulo e único
        descricao text, --text permite paragrafos e etc
        carga int unsigned, --números inteiros positivos
        totalaulas int,
        ano year default '2016' --se não inserir, padrão é 2016
    ) default charset = utf8;
    ~~~
    - *IF NOT EXISTS*: permite executar um comando se uma tabela/coluna existir

<br>

- **Removendo um tabela:**
    ~~~sql
    drop table if not exists cursos
    ~~~