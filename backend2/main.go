package main

import (
	"fmt"
	"log"
	"net/http"

	"github.com/gorilla/mux"
	"github.com/yash-raj10/techTalkers-Backend/controllers"
)


func main() {
	r := mux.NewRouter()

	r.HandleFunc("/api/profiles", controllers.GetAllProfiles).Methods("GET")
	r.HandleFunc("/api/addProfile", controllers.AddProfile).Methods("POST")

	fmt.Println("Listening at port 4000")
	log.Fatal(http.ListenAndServe(":4000", r))
	
}

//go build main.go
//go run main.go