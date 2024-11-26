const socketIo = require("socket.io");

let io;
const initSocket = (server) => {
  io = socketIo(server);

  //to listen to client connections
  io.on("connection", (socket) => {
    console.log("A User connected");

    socket.on("disconnect", () => {
      console.log("userDisconnected");
    });
  });
};

const getSocket = () => io;
module.exports = { initSocket, getSocket };
