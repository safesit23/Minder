const express = require('express')
const { createWebSocketStream } = require('ws')
const app = express()
const http = require('http').Server(app)
var io = require('socket.io')(http)
const service = require('../service/service')
const port = 3000
const test = require('../service/testService')

let room = []

app.get('/', (req, res) => {
    console.log('access')
    // test.testService()
    res.status(200).sendFile(__dirname + '/index.html')
})

io.on('connection', (socket) => {
    console.log(`User: ${socket.id} connected`)
    socket.on('joinRoom', (msg) => {
        console.log("========join room========")
        socket.join(msg)
        socket.room = msg
        console.log(`${socket.id} join ${msg}`)
        io.to(msg).emit('friendConnect', `Server: ${socket.id} join room [${socket.room}]`)
    })

    socket.on('createRoom', (msg) => {
        const code = socket.id.slice(socket.id.length - 6)
        console.log("=======create room=======")
        console.log(code, "code")
        socket.room = code
        socket.join(code)
        console.log(socket.room, "socket room")
        console.log(socket.id, "socket id")
        socket.emit('createRoom', code)
        console.log("========success==========")
    })

    socket.on('friendConnect', (msg) => {
        console.log(msg)
    })

    socket.on('dropCard', (msg) => {
        console.log(msg)
        // service.random()
        // bug send message to other room
        // io.to('Cdnfa').emit('dropCard', 'from server: ' + msg)
        io.to(socket.room).emit('dropCard', 'from server: ' + msg)
    })
    
    //waiting service
    socket.on('startGame', (msg) => {
        room.push({
            roomCode: socket.room,
            setOfCard: service.init()
        })
        console.log(room)
        console.log(socket.room, 'socket room')
        io.to(socket.room).emit('gameStart', msg + ` ${socket.room} start by ${socket.id}`)
    })
    
    socket.on('disconnect', () => {
        console.log(`${socket.id} disconnect`)
    })
    socket.on('disconnecting', () => {
        const rooms = Object.keys(socket.rooms) 
        console.log(rooms)
    })
})

http.listen(port, () => {
    console.log(`Listening on http://localhost:${port}`)
})