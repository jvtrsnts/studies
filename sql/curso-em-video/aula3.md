# Aula 3 - Criando o primeiro banco de dados

<br>

- **Banco de dados:**
    - Guardam diversas informações
- **Tabelas:**
    - Guardam informações com caracteristicas semelhantes
- **Registros:**
    - Dados do banco de dados
    - São compostos por **campos**

<br>

- ### Tipos Primitivos:
    - **Númerico:**
        - *Inteiro:*
            - TinyInt, SmallInt, Int, MediumInt, BigInt
        - *Real:*
            - Decimal, Float, Double, Real
        - *Lógico:*
            - Bit, Boolean

    <br>

    - **Data/Tempo:**
        - Date, DateTime, TimeStamp, Time, Year
    
    <br>

    - **Literal:**
        - *Caractere:*
            - Char, VarChar
        - *Texto:*
            - TinyText, Text, MediumText, LongText
        - *Binario:*
            - TinyBlob, Blob, MediumBlob, LongBlob
        - *Coleção:*
            - Enum, Set
     <br>

     - **Espacial:**
        - Geometry, Point, Polygon, MultiPolygon

<br>

- **Banco de dados > Tabelas > Registros**

- **Criação de um banco de dados:**
    ~~~sql
    CREATE DATABASE cadastro;
    ~~~

- **Criação de tabelas:** composto pelos campos e tipo de cada campo
    ~~~sql
    create table pessoas (
        nome varchar(30) ,
        idade tinyint(3),
        sexo char(1),
        peso float,
        altura float,
        nacionalidade varchar(20)
    );
    ~~~

- **Ver estrutura de uma tabela:**
    ~~~sql
    describe pessoas
    ~~~

- **O exemplo de database criado não está correto:**
    - Está permitindo cadastro duplicado, ou seja, não possui chave primaria
    - Não se cadastra idade dessa forma, pois a idade muda todo ano
    - Precisa de aprimoramento, **aula 4**
<br>

- **Terminal XAMPP:**
    - *Login:*
        ~~~sql
        mysql --user=root --password=
        ~~~

    - *Ver banco de dados:*
        ~~~sql
        show databases;
        ~~~

    - *Ver status do banco de dados selecionado:*:
        ~~~sql
        use cadastro;
        status;
        ~~~

    - *Ver tabelas do banco de dados:*
        ~~~sql
        show tables;
        ~~~

    - *Ver informações da tabela:*
        ~~~sql
        describe pessoas;
        ~~~