import express from 'express'
import { Server, Socket } from 'socket.io';
import { createServer } from 'http';

const app = express();
const port = 3000;

const server = createServer(app);

const io = new Server(server, {
    cors: {
        origin: "*",
        methods: ['GET', 'POST'],
        credentials: true
    },
})


app.get('/', (req, res) => {
    res.send("Hello world");
})

io.on("connection", (socket) => {
    console.log("User Connected");
    console.log("Id", socket.id);
    // emit se message sirf ussi socket ko jayega 
    socket.emit("welcome", `Welcome to the server , ${socket.id}`)
    // brodcast se 
    socket.broadcast.emit("welcom", `Welcome to the server , ${socket.id}`)
})
server.listen(port, () => {
    console.log(`server started at localhost://${port}`)
})