# Fluxo de Controle

<br>

- ### Loop
    - **Declaração:** semelhante ao C/C++
        ~~~go
        for x := 0; x < 10; x++ {
            // Alguma coisa
        }
        ~~~
        - `for x := 0`: inicializador
        - `x < 10`: condição
        - `x++`: pós ação

    <br>

    - **Não existe a keyword while**
        ~~~go
        x := 0
        for x < 10 {
            // faz alguma coisa
            x++
        }
        ~~~-

    <br>

    - **Loop infinito:**
        ~~~go
        for {
            // faz alguma coisa
        }
        ~~~
    - Possui break: interrompe laço

    <br>

- ### If
    - **!:** inverte comparação
    - Possui inicializador na keyword:
        ~~~go
        if x := 10; !(x < 9) {
            // faz algo
        }
        ~~~
    - ***if, else if, else***

<br>

- ### Switch
    - *if* com varios casos diferentes
        ~~~go
        x := 10

        switch true {
            case x < 5:
                // se x é menor que cinco faz uma coisa
            case x == 5:
                // se x é igual a cinco faz outra coisa
            case x > 5:
                // se x é maior que cinco faz uma coisa
        }
        ~~~

    -   Resumindo:
        ~~~go
        switch x {
            case y==x : faz isso
        }
        ~~~
    - Então é possivel:
        ~~~go
        dia_atual = "quinta"

        switch dia_atual {
            case "segunda": // não vai fazer isso
            case "terça":   // não vai fazer isso
            case "quarta":  // não vai fazer isso
            case "quinta":  // faz isso
            case "sexta":   // nem testa
        }
        ~~~
    - ***fallthrough*:** considera o proximo case verdadeiro
        ~~~go
        dia_atual = "quinta"

        switch dia_atual {
            case "segunda": // não vai fazer isso
            case "terça":   // não vai fazer isso
            case "quarta":  // não vai fazer isso
            case "quinta":  // faz isso e o de baixo
                  fallthrough
            case "sexta":   // faz isso também
        }
        ~~~

    - ***default***: se nenhum dos cases acontecer, faz o default (como o else)
        ~~~go
        dia_atual = "sabado"

        switch dia_atual {
            case "segunda": // não vai fazer isso
            case "terça":   // não vai fazer isso
            case "quarta":  // não vai fazer isso
            case "quinta":  // não vai fazer isso
            case "sexta":   // não vai fazer isso
            default:        // é find, vai fazer isso
        }
        ~~~

    - Também permite varias comparações nos cases:
        ~~~go
        dia_atual = "terça"

        switch dia_atual {
            case "segunda","terça","quarta","quinta","sexta":   // vai trabalhar
            case "sabado","domingo":    // é find
        }
        ~~~

    - Switch com base no tipo:
        ~~~go

        var x interface{}
        // Sem tipo designado
        // Lembra das funções variadicas
        
        func main() {
            x = 10

            switch x.(type) {
                case int:
                case float64:
                case string:
                case bool:
            }
        }
        ~~~

<br>

- ### Operadores Condicionais Lógicos:
    - **Igual ao C/C++:**
        - **&&:** and
        - **||:** or
