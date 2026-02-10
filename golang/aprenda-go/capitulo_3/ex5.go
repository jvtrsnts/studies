package main

import (
	"fmt"
)

type novo int

var x novo
var y int

func main() {
	fmt.Printf("Valor de x: %v\tTipo de x: %T\n", x, x)
	x = 42
	fmt.Println("Valor de x: ", x)
	y = int(x)
	fmt.Printf("Valor de y: %v\tTipo de y: %T\n", y, y)
}