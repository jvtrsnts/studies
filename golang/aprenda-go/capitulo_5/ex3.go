package main

import (
	"fmt"
)

const (
	a = iota
	b
	c = 10
	d = 20
	e string = "isso é uma string"
	f float = 10.1
)

func main() {
	fmt.Println(a)
	fmt.Println(b)
	fmt.Println(c)
	fmt.Println(d)
	fmt.Println(e)
	fmt.Println(f)
}