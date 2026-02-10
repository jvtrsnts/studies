package main

import (
	"fmt"
)

func main() {
	
	esporte := "bike"
	switch {
	case esporte == "nado":
		fmt.Print("gosto de nadar")
	case esporte == "bike":
		fmt.Print("gosto de bike")
	default:
		fmt.Print("se vai more")
	}
}