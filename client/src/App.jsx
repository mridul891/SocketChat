import { useEffect, useMemo, useState } from 'react'
import { io } from 'socket.io-client'
import { Button, Container, TextField, Typography } from '@mui/material'
const App = () => {

  const socket = useMemo(() => io("http://localhost:3000/"), [])

  const [message, setMessage] = useState("")
  const [room, setRoom] = useState("")
  const [Socketid, setSocketid] = useState("")
  const [messages, setMessages] = useState([])

  console.log(messages)
  const handleSubmit = (e) => {
    e.preventDefault();
    socket.emit("message", { message, room });
    setMessage("");
  };

  useEffect(() => {
    socket.on("connect", () => {
      setSocketid(socket.id)
      console.log("connected", socket.id);
    })

    socket.on("recieve", (data) => {
      console.log(data)
      setMessages((messages) => [...messages, data])
    }
    )

    return () => {
      socket.disconnect()
    }
  }, [])
  return (
    <Container maxWidth="sm">
      <Typography variant="h1" component="div" gutterBottom>
        Welcome to Socket.io
      </Typography>

      <Typography>
        {Socketid}
      </Typography>
      <form onSubmit={handleSubmit}>
        <TextField value={room}
          id="outlined-basic"
          label="room"
          variant='outlined'
          onChange={(e) => setRoom(e.target.value)}
        />
        <TextField value={message}
          id="outlined-basic"
          label="message"
          variant='outlined'
          onChange={(e) => setMessage(e.target.value)}
        />
        <Button type="submit" variant="contained" color="primary" > Send </Button>
      </form>
    </Container>
  )
}

export default App