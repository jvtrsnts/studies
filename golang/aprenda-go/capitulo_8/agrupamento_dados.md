# Agrupamento de dados

<br>

- ### Array
    - **Pouco usado**
    - Possui número finito de elementos

    <br>

    - Declaração:
        ~~~go
        package main
        
        import (
            "fmt"
        )

        var x [5] int

        func main() {
            x[0] = 1
            x[1] = 2
            fmt.Println(x[0], x[1])
            fmt.Println(x)
        }
        ~~~

        ~~~go
        package main

        import (
            "fmt"
        )

        func main() {
            array := [5]int{1,2,3,4,5}
        }
        ~~~

    <br>

    - Função *len(array)* retorna o tamanho do array

<br>

- ### Slice
    - Tamanho/comprimento dinamico
    - Não é possivel adicionar valores fora do escopo
    - Uso de *append(slice, valor)*
    
    <br>
    
    - Declaração:
        ~~~go
        package main

        import (
            "fmt"
        )

        func main() {
            slice := []int{1,2,3}
        }
        ~~~
    <br>

    - **Função *range()*:**
        - Percorre um slice
            ~~~go
            package main

            import (
                "fmt"
            )

            func main() {
                slice := []string{"banana", "maca", "jaca"}
                
                // range em slices retorna o indice e o valor
                for indice, valor := range slice {
                    fmt.Println("No indice ", indice, "temos:", valor)
                }
            }
            ~~~

    <br>

    - Fatiar um slice
        ~~~go
        package main
        import (
            "fmt"
        )

        func main() {
            slice := []int{1,2,3,4,5}
            fatia1 := slice[1:2]    // pega do 1 ao 2(nao incluso)|[1]
            fatia2 := slice[1:4]    // pega do 1 ao 4(nao incluso)|[1,2,3]
            fatia3 := slice[:4]     // pega do primeiro até o 4(nao incluso)
            fatia4 := slice[2:]     // pega do 2 até o ultimo
        }
        ~~~

    <br>

    - Excluir um elemento de uma slice
        ~~~go
        package main

        import (
            "fmt"
        )

        func main() {
            slice := []int{1,2,3,4,5}
            novo_slice := append(slice[:2], slice[3:]...)
        }
        ~~~

    <br>

    - Anexando slices
        - Uso do unfuri: ***...*** , três pontinhos
            - Pega somente os valores de uma slice, desenrola a slice

            ~~~go
            package main
            
            import (
                "fmt"
            )

            func main() {
                slice1 := []int{1,2,3}
                slice2 := []int{7,8,9}
                nova_slice := append(slice1, 4,5,6)
                nova_slice = append(slice1, slice2...)
                // append é uma funçao variatica
                // adiciona os valores no slice1
            }
            ~~~

    <br>

    - Função ***make()***:
        - Um slice tem um array como base
        - Um slice possui um tamanho e uma capacidade
        - Ao extrapolar a capacidade de um slice, uma copia dele é feita, dobrando a capacidade
        - Usar o make permite ditar o comprimento e a capacidade de um slice
        - Evita copias
        ~~~go
        package main

        import (
            "fmt"
        )

        func main() {
            slice := make([]int, 5, 10) // Cria um slice de inteiros, de comprimento 5 e capacidade 10
            fmt.Println(
                len(slice), // Mostra o comprimento de um slice
                cap(slice)  // Mostra a capacidade de um slice
                )

        }
        ~~~

    <br>

    - Slices multi-dimensionais:
        - slices de slices
        ~~~go
        package main
 
        import (
            "fmt"
        )

        func main() {
            slice := [][]int{
                []int{1,2,3},
                []int{3,4,5}
            }
        }
        ~~~

    <br>

    - Append em slices costumam refatiar o primeiro slice, podendo gerar erros