# Fundamentos da Programação

<br>

- ### Tipo Booleano
    - **Operador relacionais:** ==, !=, <= , <, >=, >
    - Nada de diferente, foco no sinal de diferente que muda em algumas linguagens

<br>

- ### Como os os computadores funcionam
    - **Curiosidades:**
        - simbolo de liga e desliga vem de 1 e 0
        - **Bi**nary Digi**ts**: **Bits**
        - **BUG:** inseto
            - Veio dos interruptores
            - Grace Hopper
            - Inseto nos interruptores, impossibilitando o uso correto

    <br>

    - **ASCII:** alfabeto
        - Inicialmente para lingua inglesa
    - **UTF-8:**
        - Inclui ASCII e todos os outros caracteres possiveis
        - Mais usado

<br>

- ### Tipos Númericos
    - **Inteiros sem sinal:** unsigned
        - uint8
        - uint16
        - uint32
        - uint64

    - **Inteiros com sinal:**
        - int8
        - int16
        - int32
        - int64

    - **Ponto Flutuante:**
        - float32
        - float64

    - **Complexos:** divide os bits entre a parte real e imaginaria
        - complex64
        - complex128

    - **byte:** uint8
    - **rune:** int32(UTF-8)

    <br>

    -   **[ ]byte( ):** converte para bytes
        ~~~go
        a := "e"
        b := "é"

        c := []byte(a) // Converter a para bytes slice
        d := []byte(b) // Converter b para bytes slice
        ~~~

<br>

- ### Tipo String
    - **Imutaveis em GO**
    - **Formats:**
        - *%v:* value
        - *%T:* tipo
            ~~~go
            s := "hello"
            fmt.Printf("%v, %T", s, s)
            // hello, string
            ~~~
        
        <br>

        - String entre acento agudo permite strings em linhas
            ~~~go
            s := "hello bla
                    alskda asda"
            fmt.Print(s)
            // ERRO
            ~~~

            ~~~go
            s := `hello bla
                    alskda asda`
            fmt.Print(s)
            // hello bla
            //      alskda asda
            ~~~
    
    <br>

    - Strings são "*slice of bytes*": fatia de bytes
        - ***[]bytes()***: permite pegar o byte de cada caracter
            - fatiar a string pegando todos seus bytes

    <br>

    - **Formats: # serve apenas para inserir 0x** 
        - *%#U:* Unicode do caracter
        - *%#x:* hexadecimal do caracter

<br>

- ### Sistemas Númericos
    - Faculdade, nada de novo

<br>

- ### Constantes
    - Sempre o mesmo valor
    - **Tipagem:** Pode ser *typada* ou não
        - Não declarar o tipo de uma constante permite flexibilidade:
        - Tipo é atribuido no momento do uso
            - Enquanto variaveis é na atribuição

    - Podem ser declaradas em uma unica keyword:
        ~~~go
        const (
            a = 10
            b = "ola"
            c = 11.1
            d = true
        )
        ~~~

<br>

- ### Iota
    ~~~go
    const (
        a = iota
        b = iota
        c = iota
        d = iota
        e = iota
        f = iota
    )

    fmt.Print(a, b, c, d, e, f)
    // 0 1 2 3 4 5
    ~~~

    - Permitem atribuir valores inteiros não tipados diferentes em sequencia à constantes
    - **_:** Joga valores fora

    <br>

    - Pode ser usado apenas na primeira expressão e aplicado para o resto
        ~~~go
        const (
            a = iota * 10
            b
            c
            d
            e
            f
        )

        fmt.Print(a, b, c, d, e, f)
        // 0 10 20 30 40 50
        ~~~

<br>

- ### Deslocamento de bits
    - **'<<'**: desloca para esquerda
    - **'>>'**: desloca para direita
    ~~~go
    x := 1
    y := x << 2
    z := y >> 2

    fmt.Printf("%b %b %b", x, y, z) // %b: valor binario
    // 1 100 001
    ~~~