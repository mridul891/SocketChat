import { useEffect, useMemo, useState } from "react";
import { io } from "socket.io-client";
import { Button, Container, Stack, TextField, Typography } from "@mui/material";
const App = () => {
  const socket = useMemo(() => io("http://localhost:3000/"), []);

  const [messages, setMessages] = useState([]);
  const [message, setMessage] = useState("");
  const [room, setRoom] = useState("");
  const [Socketid, setSocketid] = useState("");
  const [roomName, setRoomName] = useState("");

  console.log(messages);
  const handleSubmit = (e) => {
    e.preventDefault();
    socket.emit("message", { message, room });
    setMessage("");
  };

  const joinRoomHandler = (e) => {
    e.preventDefault();
    socket.on("join-room", room);
    setRoomName("");
  };

  useEffect(() => {
    socket.on("connect", () => {
      setSocketid(socket.id);
      console.log("connected", socket.id);
    });

    socket.on("recieve", (data) => {
      console.log(data);
      setMessages((messages) => [...messages, data]);
    });

    return () => {
      socket.disconnect();
    };
  }, []);
  return (
    <Container maxWidth="sm">
      <Typography variant="h1" component="div" gutterBottom>
        Welcome to Socket.io
      </Typography>

      <Typography>{Socketid}</Typography>

      <form onSubmit={joinRoomHandler}>
        <h5>Join room </h5>
        <TextField
          value={roomName}
          id="outlined-basic"
          label="Room Name"
          variant="outlined"
          onChange={(e) => setRoomName(e.target.value)}
        />
        <Button type="submit" variant="contained" color="primary">
          Send
        </Button>
      </form>

      <form onSubmit={handleSubmit}>
        <TextField
          value={room}
          id="outlined-basic"
          label="room"
          variant="outlined"
          onChange={(e) => setRoom(e.target.value)}
        />
        <TextField
          value={message}
          id="outlined-basic"
          label="message"
          variant="outlined"
          onChange={(e) => setMessage(e.target.value)}
        />
        <Button type="submit" variant="contained" color="primary">
          Send
        </Button>
      </form>

      <Stack>
        {messages.map((m, i) => (
          <Typography key={i} variant="h6" component="div" gutterBottom>
            {m}
          </Typography>
        ))}
      </Stack>
    </Container>
  );
};

export default App;
