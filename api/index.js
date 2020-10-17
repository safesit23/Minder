const express = require('express')
const app = express()
const http = require('http').Server(app)
var io = require('socket.io')(http)
const service = require('../service/service')
const port = 3000

let roomno = 1

app.get('/', (req, res) => {
    console.log('access')
    res.status(200).sendFile(__dirname + '/index.html')
})

io.on('connection', (socket) => {
    console.log(`User: ${socket.id} connected`)
    socket.on('joinRoom', (msg) => {
        socket.join(msg)
        io.to(msg).emit('joinRoom')
        console.log(`${socket.id} join ${msg}`)
        io.to(msg).emit('friendConnect', `Server: ${socket.id} join room [${msg}]`)
    })

    socket.on('createRoom', (msg) => {
        let code = socket.id.slice(socket.id.length - 6)
        console.log(code, "code")
        socket.join(code)
        io.to(code).emit('createRoom', 'Create Room')
        io.to(code).emit('successRoom', {
            roomCode: code
        })
    })

    socket.on('dropCard', (msg) => {
        console.log(msg)
        // service.random()
        // bug send message to other room
        // io.to('Cdnfa').emit('dropCard', 'from server: ' + msg)
        io.emit('dropCard', 'from server: ' + msg)
    })    
    
    socket.on('disconnect', () => {
        console.log(`${socket.id} disconnect`)
    })
})

http.listen(port, () => {
    console.log(`Listening on http://localhost:${port}`)
})