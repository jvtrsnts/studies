# Aula 7 - Manipulando Linhas/Registros/Tupla

<br>

- **Atualizar registros:**
    ~~~sql
    update cursos --Indica que quer atualizar a tabela cursos ...
    set nome = 'HTML5' --... alterando o nome para HTML ...
    where idcurso = '1'; --... onde tem idcurso igual a 1
    ~~~

- **Atualizar mais de um registro:**
    ~~~sql
    update cursos
    set nome = 'PHP', ano = '2015' -- Atualiza mais de um campo
    where idcurso = '4';
    ~~~

- **Atualizar apenas um registro:**
    ~~~sql
    update cursos
    set nome = 'Java', carga = '40', ano = '2015'
    where idcurso = '5'
    limit 1; -- Limita para somente um registro
    ~~~

- **Apagar registros:**
    ~~~sql
    delete from cursos --Deleta da tabela cursos...
    where idcurso = '8'; --... onde o idcurso é igual a 8
    ~~~

- **Apagar TODOS registros:**
    ~~~sql
    truncate table cursos;
    ~~~