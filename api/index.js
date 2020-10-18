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
    test.testService()
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
        const code = socket.id.slice(socket.id.length - 6)
        console.log(code, "code")
        socket.join(code)
        io.to(code).emit('createRoom', code)
        // io.to(code).emit('successRoom', {
        //     roomCode: code
        // })
    })

    socket.on('friendConnect', (msg) => {
        console.lgo(msg)
    })

    socket.on('dropCard', (msg) => {
        console.log(msg)
        // service.random()
        // bug send message to other room
        // io.to('Cdnfa').emit('dropCard', 'from server: ' + msg)
        io.emit('dropCard', 'from server: ' + msg)
    })
    
    //waiting service
    socket.on('startGame', (msg) => {
        room.push({
            roomCode: socket.room,
            setOfCard: service.init()
        })
        io.to(socket.room).emit('gameStart', "")

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