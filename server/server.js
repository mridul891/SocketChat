const express = require('express')
const { chats } = require('./data/data')
const dotenv = require('dotenv')
const app = express();

const port = process.env.PORT || 3000
dotenv.config();

app.get('/', (req, res) => {
    res.send("Api is running")
})

app.get('/api/chat', (req, res) => {
    res.send(chats)
})

app.get('/api/chat/:id', (req, res) => {
    // console.log(req.params.id)
    const singleChat = chats.find(c => c._id === req.params.id);
    res.send(singleChat)
})

app.listen(port, () => console.log(`the server is running at localhost ${port}`))