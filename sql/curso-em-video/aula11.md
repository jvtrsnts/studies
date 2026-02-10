# Aula 11 - SELECT (Pt.1)

<br>

- ### Entendo o comando SELECT:
    ~~~sql
    select * from cursos;
    ~~~
    - Selecione ***colunas*** da tabela ***cursos***
    - Ordena pela primary key de cada registro
    
    <br>

    ~~~sql
    select * from cursos
    order by nome;
    ~~~
    - Ordena de forma ascendente pelo nome

    <br>

    ~~~sql
    select * from cursos
    order by nome desc;
    ~~~
    - Ordena de forma descendente pelo nome

    <br>

    ~~~sql
    select nome, carga, ano from cursos
    order by nome;
    ~~~
    - Mostra apenas as colunas nome, carga e ano
    - Ordena de forma crescente pelo nome

    <br>

    ~~~sql
    select nome, carga, ano from cursos
    order by ano, nome;
    ~~~
    - Seleciona as colunas nome, carga e ano
    - Ordena com base do ano, e dentro do ano com base no nome

    <br>

    ~~~sql
    select * from cursos
    where ano='2016'
    order by nome;
    ~~~
    - Seleciona todas as colunas da tabela cursos
    - Onde os anos sejam 2016, filtra por linhas
    - Ordena de forma crescente pelo nome

    <br>

    ~~~sql
    select * from cursos
    where ano <= '2015'
    order by nome;
    ~~~
    - Seleciona todas as colunas da tabela cursos
    - Onde a coluna ano é menor ou igual a 2015
    - Ordena de forma crescente pelo nome
    
    <br>

- ### Operadores relacionais: no WHERE
    - <, >, <=, >=, =, !=(<>)

    <br>

    ~~~sql
    select nome, ano from cursos
    where ano between 2014 and 2016;
    ~~~
    - Seleciona a linhas com ano entre 2014 e 2016

    <br>

    ~~~sql
    select nome, ano from cursos
    where ano between 2014 and 2016;
    order by ano desc, nome;
    ~~~
    - Ordena pelo ano de forma descendente, e pelo nome

    <br>

    ~~~sql
    select nome, ano from cursos
    where ano in ('2014', '2016')
    order by ano;
    ~~~
    - Seleciona linhas onde o ano é 2014 ou 2016

    <br>

- ### Operadores lógicos: no WHERE
    - and, or

    <br>

    ~~~sql
    select nome, ano from cursos
    where carga > '35' and totaulas < '30';
    ~~~
    - Seleciona as linhas onde carga > 35 e totaulas < 30