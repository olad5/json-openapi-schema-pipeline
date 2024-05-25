package main

import (
	"encoding/json"
	"fmt"
)

type StructToUse struct {
	ID        string `json:"id"`
	Email     string `json:"email"`
	FirstName string `json:"first_name"`
	LastName  string `json:"last_name"`
}

// source: https://www.delftstack.com/howto/go/how-to-convert-go-struct-to-json/
func main() {
	structToUse := &StructToUse{}
	e, err := json.Marshal(structToUse)
	if err != nil {
		fmt.Println(err)
		return
	}
	fmt.Println(string(e))
}
