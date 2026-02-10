package main

import (
	"fmt"
)

type novo int

var x novo

func main() {
	fmt.Printf("Valor de x: %v\tTipo de x: %T\n", x, x)
	x = 42
	fmt.Print("Valor de x: ", x)
}
