package main

import (
	"fmt"
)

const (
	_ = iota + 2024
	a
	b
	c
	d
)

func main() {
	fmt.Print(a, b, c, d)
}