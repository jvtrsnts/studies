# Aula 13 - SELECT (Pt.3)bb

<br>

- ### Agrupando registros:
    ~~~sql
    select carga from cursos
    group by carga;
    ~~~
    - Mostra as cargas dos cursos
    - Agrupando os registros pela carga

    <br>

    ~~~sql
    select carga, count(*) from cursos
    group by carga;
    ~~~
    - Mostra o numero de registros de cada carga

    <br>

    ~~~sql
    select carga, count(*) from cursos where totaulas = 30
    group by carga;
    ~~~
    - Mostra as cargas e quantidade de registros de cada carga para registros que tenham 30 aulas

    <br>

    ~~~sql
    select ano, count(*) from cursos
    group by ano
    having count(ano) > 3;
    ~~~
    - Mostra os anos que tenham mais de 3 registros
        - **HAVING PRO GROUP BY É IGUAL O WHERE PARA O SELECT**
        - **SOMENTE USAR COLUNAS USADA NO GROUP BY**

    <br>

    ~~~sql
    select carga, count(*) from cursos
    where ano > 2015
    group by carga
    having carga > (select avg(carga) from cursos);
    ~~~
    - Seleciona carga e a quantidade de cada carga da tabela cursos
    - Onde o ano é maior que 2015
    - Agrupando pela carga
    - Que tenham carga maior que a média de todas cargas