package main

import (
	"net/http"
	"github.com/go-chi/chi/v5"
	"github.com/go-chi/chi/v5/middleware"
	"github.com/joho/godotenv"
	"os"
	"fmt"
)

func main() {
	err := godotenv.Load();
	if err != nil {
		fmt.Println("Error loading .env")
	}

	riotkey := os.Getenv("RIOTAPI")
	fmt.Println(riotkey)

	r := chi.NewRouter()
	r.Use(middleware.Logger)
	r.Get("/", func(w http.ResponseWriter, r *http.Request) {
		w.Write([]byte("welcome"))
		w.Write([]byte(riotkey))
	})
	http.ListenAndServe(":4000", r)
}
