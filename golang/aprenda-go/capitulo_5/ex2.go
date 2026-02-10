package main

import (
	"fmt"
)

func main() {
	a := (1 == 2)
	b := ("b" != "a")
	c := (1 >= 1)
	d := (1 > 1)
	e := (3 <= 3)
	f := (3 < 3)

	fmt.Printf("%v\n%v\n%v\n%v\n%v\n%v\n", a, b, c, d, e, f)
}