# Aula 5 - Inserindo Dados Em Uma Tabela

<br>

- **Tudo que está entre ' ' são dados em SQL**

<br>

- **Inserção de registros:**
    ~~~sql
    insert into pessoas
    (nome, nascimento, sexo, peso, altura, nacionalidade)
    values
    ('Godofredo', '1982-01-07', 'M', '72.5', '1.7', 'Brasil');
    -- Campo ID não é necessário pois ele é auto_increment, not null e primary key

    insert into pessoas
    (id, nome, nascimento, sexo, peso, altura, nacionalidade)
    values
    (default, 'Maria', '1984-03-10', 'F', '76.5', '1.55', default);
    -- Insere o padrão nos campos selecionados

    insert into pessoas values
    (default, 'Maria', '1984-03-10', 'F', '76.5', '1.55', default);
    -- Desde que esteja na mesma ordem da tabela
    ~~~

- **Inserção de multiplos registros:**
    ~~~sql
    insert into pessoas
    (id, nome, nascimento, sexo, peso, altura, nacionalidade)
    values
    (default, 'Jorge', '2005-05-09', 'M', '80', '1.8', 'Argentina'),
    (default, 'Dolores', '1990-01-21', 'F', '96.5', '1.65', default);

    -- OU

    insert into pessoas values
    (default, 'Jorge', '2005-05-09', 'M', '80', '1.8', 'Argentina'),
    (default, 'Dolores', '1990-01-21', 'F', '96.5', '1.65', default);
    ~~~

- **Visualizar dados:**
    ~~~sql
    select * from pessoas; -- Seleciona tudo da tabela pessoas
    ~~~