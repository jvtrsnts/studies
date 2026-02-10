package main

import (
	"fmt"
)

func main() {
	cansado := true
	afazeres := true

	if afazeres && !cansado{
		fmt.Println("Bora terminar essas coisas fi pra curtir")
	} else if afazeres && cansado{
		fmt.Println("Bora terminar essas coisas fi e ir dormir")
	} else if !afazeres && !cansado {
		fmt.Println("vai se exercitar fi")
	} else {
		fmt.Println("Hmmm cama gostosa")
	}
}