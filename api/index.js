const express = require('express')
const app = express()
const http = require('http').Server(app)
var io = require('socket.io')(http)
const service = require('../service/service')
const port = 3000

let roomno = 1
let roomCode

app.get('/${room}', (req, res) => {
    roomCode = req.room
    console.log(`${roomCode}, ${req.room}`)
    console.log('access')
    res.status(200).sendFile(__dirname + '/index.html')
})

io.on('connection', (socket) => {
    console.log(`User: ${socket.id} connected`)
    console.log(io.nsps['/'].adapter.rooms["room-"+roomno])
    socket.join("room-"+roomno)
    socket.on('dropCard', (msg) => {
        console.log(msg)
        service.random()
        io.emit('dropCard', 'from server: ' + msg)
    })    
    
    socket.on('disconnect', () => {
        console.log('user disconnect')
    })
})

http.listen(port, () => {
    console.log(`Listening on http://localhost:${port}`)
})