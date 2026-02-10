# Aula 4 - Melhorando a Estrutura do Banco de Dados

<br>

- **Deletar um banco de dados:**
    ~~~sql
    drop database cadastro;
    ~~~

- **Constantes/Parametros:**
    - *Criação de um banco de dados:*
        ~~~sql
        create database cadastro
        default character set utf8 -- Tipo de caracter pertence a UTF-8
        default collate utf8_general_ci; -- Não sei
        ~~~

    - **Criação de tabelas:**
        ~~~sql
        create table pessoas(
            id int not null auto_increment, -- Campo não pode ser nulo e irá incrementar a cada inserção
            nome varchar(30) not null, -- Campo não pode ser vazio
            nascimento date, -- Permite calcular idade
            sexo enum('M', 'F'), -- Só permitira M ou F
            peso decimal(5,2), -- 5 números, 2 decimais | 123,45
            altura decimal(3,2) -- 3 números, 2 decimais | 1,23
            nacionalidade varchar(20) default 'Brasil', -- Se não inserir nada, o padrão será Brasil
            primary key (id) -- Define o campo ID como primary key
        ) default charset = utf8; -- Define o tipo de caracteres para utf-8
        ~~~