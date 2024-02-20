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

	enhancedRouter := enableCORS(r)

	fmt.Println("Listening at port 4000")
	log.Fatal(http.ListenAndServe(":4000", enhancedRouter))
	
}

func enableCORS(next http.Handler) http.Handler {
	return http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
		// Set CORS headers
		w.Header().Set("Access-Control-Allow-Origin", "*") // Allow any origin
		w.Header().Set("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS")
		w.Header().Set("Access-Control-Allow-Headers", "Content-Type")

		if r.Method == "OPTIONS" {
			w.WriteHeader(http.StatusOK)
			return
		}

		next.ServeHTTP(w, r)
	})
}


//go build main.go
//go run main.go