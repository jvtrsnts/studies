# Aula 12 - SELECT (Pt.2)

<br>

- ### Filtro por caracteres:
    ~~~sql
    select * from cursos
    where nome like 'P%'
    ~~~
    - Seleciona as linhas onde o nome começa com 'p' ou 'P'
    - **%**: caracter coringa
        - Nenhum ou varios caracteres
    - Seguido de qualquer coisa

    <br>

    ~~~sql
    select * from cursos
    where nome like '%a'
    ~~~
    - Seleciona as linhas onde o nome termina com 'a' ou 'A'

    <br>

    ~~~sql
    select * from cursos
    where nome like '%a%'
    ~~~
    - Seleciona as linhas onde o nome tenha 'a' ou 'A'

    <br>
    
    ~~~sql
    select * from cursos
    where nome not like '%a%';
    ~~~
    - Linhas onde o nome não tem a

    <br>

    ~~~sql
    select * from cursos
    where nome like 'ph%p'
    ~~~
    - Linhas onde o nome tenha 'ph' no inicio e 'p' no final

    <br>

    ~~~sql
    select * from cursos
    where nome like 'ph%p_'
    ~~~
    - Linhas onde o nome tenha 'ph' no inicio e 'p' seguido de um caracter no final
    - **_**: simboliza exatamente um caracter

<br>

- ### Distinção:
    ~~~sql
    select distinct carga from cursos;
    ~~~
    - Seleciona todos os valores de cargas diferentes
    - Se ja leu uma carga, não inclui novamente
    - Evita repetição

<br>

- ### Agregação:
    ~~~sql 
    select count(*) from cursos;
    ~~~
    - Retorna o numero de elementos da tabela

    <br>

    ~~~sql
    select count(*) from cursos where carga > '40';
    ~~~
    - Retorna o numero de elementos da tabela onde a carga e maior que 40

    <br>

    ~~~sql
    select max(carga) from cursos;
    ~~~
    - Retorna a maior carga da tabela cursos

    <br>

    ~~~sql
    select max(carga) from cursos where ano = '2016';
    ~~~
    - Retorna a maior carga em 2016

    <br>

    ~~~sql
    select min(totaulas) from cursos where ano = '2016';
    ~~~
    - Retorna a menor carga em 2016

    <br>

    ~~~sql
    select nome, min(totaulas) from cursos where ano = '2016';
    ~~~
    - Retorna a menor carga em 2016 e seu nome

    <br>

    ~~~sql
    select sum(totaulas) from cursos;
    ~~~
    - Retorna o somatorio de total de aulas

    <br>

    ~~~sql
    select avg(totaulas) from cursos;
    ~~~
    - Retorna a medis de total de aulas