const express = require('express')
const app = express()
const http = require('http').createServer(app)
var io = require('socket.io')(http)

const port = 3000

app.get('/', (req, res) => {
    res.status(200).sendFile(__dirname + '/index.html')
})

io.on('connection', (socket) => {
    console.log('undefined user connected')
})

http.listen(port, () => {
    console.log(`Listening on http://localhost:${port}`)
})