# Variaveis, Valores e Tipos

<br>

- ### Hello World
    -   ~~~go
        package main

        import (
            "fmt"
        )

        func main() {
            fmt.Println("Hello World, or playground")
        }
        ~~~

    - **package**: organizador de código
    - **main**: onde tudo começa e termina
    - ***Compilador deve chamar***: main.main() = pacote.assinatura
    
    <br>

    - ***Println***: retorna o número de bytes usados e algum erro
        -   ~~~go
            numeros, erro := fmt.Println("Hello World")
            // sinal de atribuição é :=
            // toda variavel deve ser usada, logo o código acima dara erro
            fmt.Println(numero, erro)
            // erro concertado
            ~~~
        -   ~~~go
            _, _:= fmt.Println("Hello World")
            // desse jeito também dá certo
            ~~~

        - **_**: variavel não declarada
        - **nil**: *None* da linguagem

        - **É uma função variatica**: consegue lidar com varios argumentos
            - *'...interface'* :  significa os tipos na documentação
            - Permite inserir vários argumentos de varios tipos

<br>

- ### Operador Curto de Declaração < := >
    - Serve para declarar variaveis
    - Tipagem automatica: define o tipo automaticamente
    - Só funciona dentro de uma bloco de código
        - Não pode ser usado para variaveis globais
    -   ~~~go
        x := 16
        y := "teste"

        fmt.Printf("valor x: %v, tipo x: %T\n", x, x)
        fmt.Printf("valor y: %v, tipo y: %T", y, y)

        // valor x: 16, tipo x: int
        // valor y: teste, tipo y: string
        ~~~
    
    <br>

    -   ~~~go
        x := 16
        y := "teste"

        fmt.Printf("valor x: %v, tipo x: %T\n", x, x)
        fmt.Printf("valor y: %v, tipo y: %T", y, y)
        x = 20
        fmt.Printf("valor x: %v, tipo x: %T\n", x, x)

        // valor x: 16, tipo x: int
        // valor y: teste, tipo y: string
        // valor x: 20, tipo x: int
        ~~~

        - **=** : atribui valores a variaveis
        
        <br>

    -   ~~~go
        package main

        import (
            "fmt"
        )

        var y =  "teste"
        // valor precisa ser atribuido ao declarar
        // se não, atribuição apenas dentro de um bloco

        func main() {
            fmt.Printf("valor y: %v, tipo y: %T", y, y)
        }
        // valor y: teste, tipo y: string
        ~~~
        
        - **var**: pode ser usado para declarar variaveis fora de bloco

    <br>

    - **==, >, <**

<br>

- ### Keyword var
    - Variaveis declaradas em um bloco são indefinidas em outros

<br> 

- ### Tipos
    - Tipos são estaticos
        - Um *int* será sempre *int*
        -   ~~~go
            var x int = 10
            // igual
            var x = 10
            ~~~
    - **Tipos básicos:**
        - int
        - string
        - float

    - **Tipos compostos (COMPOSIÇÃO) :** feitos a partir dos primitivos
        - slice
        - map
        - array
        - struct

<br>

- ### Valor zero: declaração *x* inicialização *x* atribuição
    - **Declaração:** `var x int`
        - *x* é um variavel
    - **Inicialização:** `x  = 10`
        - primeiro valor de *x* é 10
    - **Atribuição:** `x = 20`
        - próximo valor de *x* é igual a 20
    - **O operador curto faz todos ao mesmo tempo**

    <br>

    - Cada tipo possui um valor zero diferente:
        - **int:** 0
        - **string:** ""
        - **booleans:** false
        - **float:** 0.0
        - **pointers, functions, interfaces, slices, channels, maps:** nil
    
    <br>
    
    - Usar ***:=*** sempre que possivel

<br>

- ### Package "fmt"
    - **interpreted string literal:** interpreta de caracteres especiais
        - \n, \t, \ " \ ", ...

    - **raw string literal:** não interpreta caracteres especiais
        - uso entre ``
    - Cada caracter de uma string = *Rune*

    <br>

    - **Funções Print:**
        - *Print():* não pula linha
        - *Println():* pula linha
        - *Printf():* não pula linha e permite formatar
        - *Sprint():* não printa mas retorna em uma unica string
        - *Fprint():* usa bytes, serve para interfaces de escrita

<br>

- ### Criando um tipo
    -   ~~~go
        package main

        import (
            "fmt"
        )

        type exemplo int
        var b exemplo

        func main() {
            fmt.Printf("tipo b: %T", b)
        }

        // tipo b: main.exemplo
        ~~~

        - ***type*:** permite atribuir diferentes tipos advindos dos tipos primitivos

    -   ~~~go
        package main

        import (
            "fmt"
        )

        type exemplo int
        var b exemplo

        func main() {
            x := 10
            b = x
        }
        // dará um erro de tipos, mesmo ambos sendo int como base
        // tipos diferentes
        ~~~

<br>

- ### Conversão, não coerção
    - Vimos que o codigo da erro pois *x* e *b* possuem tipos diferentes:
        ~~~go
        package main

        import (
            "fmt"
        )

        type exemplo int
        var b exemplo

        func main() {
            x := 10
            b = x
        }
        // dará um erro de tipos, mesmo ambos sendo int como base
        // tipos diferentes
        ~~~
    - Porém, pode ser solucionado convertendo os tipos:
        ~~~go
        package main

        import (
            "fmt"
        )

        type exemplo int
        var b exemplo = 20

        func main() {
            x := 10
            x = int(b)
        }
        // funcionará corretamente
        ~~~
    - **NO GOLANG SÓ EXISTE CONVERSÃO**