# Aula 16 - INNER JOIN com várias tabelas

<br>

- #### Relação: muitos <-> muitos
    - Criar nova tabela representando a ação
    - Que tenha uma chave primaria
    - E que referencie as outras chaves primarias(suas chaves estrangeiras)
        ~~~sql
        create table gafanhoto_assiste_curso (
            id int not null auto_increment,
            data date,
            idgafanhoto int,
            idcurso int,
            primary key (id),
            foreign key (idgafanhoto) references gafanhoto(id),
            foreign key (idcurso) references cursos(idcursos)
        ) default charset = utf8;
        ~~~

    <br>
    - Adição de elementos feita normalmente
        ~~~sql
        insert into gafanhoto_assiste_curso values
        (default, '2014-03-01', '1', '2');
        ~~~
    
<br>

- #### Mostrar relações: muitos <-> muitos
    ~~~sql
    select g.nome, a.idgafanhoto, a.idcurso, c.nome from gafanhotos as g
    join gafanhoto_assiste_curso as a
    on g.id = a.idgafanhoto
    join cursos as c
    on a.idcurso = c.idcurso;
    ~~~
    - Seleciona nome, idgafanhoto, idcurso e nome da tabela gafanhoto...
    - ...unindo com a tabela gafanhoto_assiste_curso...
    - ...com id = idgafanhoto...
    - ...unindo com a tabela cursos
    - ...com idcurso = idcurso