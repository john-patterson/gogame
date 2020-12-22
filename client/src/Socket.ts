var socket = new WebSocket("ws://localhost:8080/ws")

let connect = (cb: (data: MessageEvent) => void) => {
  console.log("Attempting connection...");

  socket.onopen = () => {
    console.log("Successfully connected!");
  };

  socket.onmessage = msg => {
    console.log(msg);
    cb(msg);
  };

  socket.onclose = event => {
    console.log("Socket closed: ", event);
  };

  socket.onerror = error => {
    console.log("Error: ", error);
  };
};

let sendMsg = (msg: string) => {
  console.log("Sending message: ", msg);
  socket.send(msg);
}

export { connect, sendMsg };