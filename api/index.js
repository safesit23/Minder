const express = require('express')
const app = express()
const http = require('http').Server(app)
var io = require('socket.io')(http)
const service = require('../service/service')
const port = 3000

app.get('/', (req, res) => {
    console.log('access')
    res.status(200).sendFile(__dirname + '/index.html')
})

io.on('connection', (socket) => {
    console.log('connect')

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