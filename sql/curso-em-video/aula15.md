# Aula 15 - Chaves estrangeiras e JOIN

<br>

- #### Mecanismo de criação de tabelas de banco de dados
    - **InnoDB:** usado no curso
    - **MyISAM:** mais comum e antiga(não suporta ACID)
    - **XtraDB:** mais nova

<br>

- #### Regras de transação (ACID)
    - **A**tomica: ou tudo ou nada é feito
    - **C**onsistência: um BD deve consistente antes e depois de ações
    - **I**solamento: duas transações paralelas devem acontecer isoladamente
    - **D**urabilidade: uma transação deve ser duravel/persistente

<br>

- #### Adicionar chave estrangeira: tipo de chave multipla
    ~~~sql
    alter table gafanhotos
    add foreign key (cursopreferido)
    references cursos(idcursos);
    ~~~
    - Altera a tabela gafanhotos...
    - ...adicionando uma chave estrangeira...
    - ...que referencia idcursos da tabelas cursos

- #### Vincular as chaves primaria com estrangeira
    ~~~sql
    update gafanhotos
    set cursopreferido = '6'
    where id = '1';
    ~~~
    - Atualiza a tabela gafanhotos...
    - ...colocando cursopreferido igual a 6...
    - onde o id é 1;

<br>

- #### Relacional:
    - Não permite exclusões que desfaçam a relação

<br>

- #### Mostrar relações: um <-> um | um <-> muitos
    ~~~sql
    select gafanhotos.nome, gafanhotos.cursopreferido, curso.nome, curso.ano
    from gafanhotos inner join cursos
    on cursos.idcurso = gafanhotos.cursopreferido;
    ~~~
    - seleciona nome e cursopreferido e, nome e ano...
    - ...da tabela gafanhotos junto da tabela cursos...
    - ...considerando idcurso igual a cursopreferido

    <br>

    - **INNER JOIN OU JOIN:**  Mostra apenas as relações
    - **LEFT OUTER JOIN OU LEFT JOIN:** Mostra todos os registros da tabela a esquerda e suas relações
    - **RIGHT OUTER JOIN OU RIGHT JOIN:** Mostra todos os registros da tabela a direita e duas relações