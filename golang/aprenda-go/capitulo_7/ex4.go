package main

import (
	"fmt"
)

func main() {

	ano_nascimento := 2001
	ano_atual := 2024

	for {
		if (ano_nascimento <= ano_atual) {
			fmt.Println(ano_nascimento)
			ano_nascimento++
		} else {
			break
		}
	}
}
