package main

import (
	"fmt"
)

func main() {
	x := 10
	fmt.Printf("Decimal: %d\tBinario: %b\tHexadecimal: %#x\n", x, x, x)

	y := x << 1
	fmt.Printf("Decimal: %d\tBinario: %b\tHexadecimal: %#x\n", y, y, y)
}