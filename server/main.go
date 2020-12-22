package main

import (
	"fmt"
	"net/http"

	"github.com/john-patterson/gogame/server/pkg/websocket"
)

func serveWebsocket(w http.ResponseWriter, r *http.Request) {
	fmt.Println(r.Host)

	ws, err := websocket.Upgrade(w, r)
	if err != nil {
		fmt.Fprintf(w, "%+/\n", err)
	}

}

func setupRoutes() {
	http.HandleFunc("/", indexRoute)
	http.HandleFunc("/ws", serveWebsocket)
}

func indexRoute(w http.ResponseWriter, r *http.Request) {
	fmt.Fprintf(w, "Simple Server")
}

func main() {
	fmt.Println("Serving traffic on :8080...")
	setupRoutes()
	http.ListenAndServe(":8080", nil)
}
