# Aula 14 - Modelo Relacional

<br>

- **Entidade**
    - Conjunto de *dados* com *atributos* semelhantes

- ### Diagrama de Entidade e Relacionamento:
    - Mostra as relações e entidades do banco de dados
    - **Relações/Cardinalidade:**
        - **Muitos <-> Muitos:**
            - Transforma a relação em uma entidade
            - Une as duas outras entidade na recém criada
            - Inclui as duas PK das entidades na entidade recém criada

        <br>

        - **Um <-> Muitos:**
            - *Muitos* recebe a PK do *Um* como EK
        
        <br>

        - **Um <-> Um:**
            - Entidade a esquerda recebe a PK da outra como EK

- **Relações:**
    - Chave primaria: permite identificar unicamente um registro
    - Chave estrangeira: chave primaria de outra tabela