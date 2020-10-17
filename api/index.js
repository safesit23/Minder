const express = require('express')
const app = express()
const http = require('http').createServer
const port = 3000


app.get('/', (req, res) => {
    res.status(200).send('Hello')
})

app.listen(port, () => {
    console.log(`Listening on http://localhost:${port}`)
})