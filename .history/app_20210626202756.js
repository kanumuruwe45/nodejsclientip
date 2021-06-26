const express = require('express')
const app = express()

var getIP = require('ipware')().get_ip;


const port = 3000

app.get('/', (req, res) => {
    // Code to be written here for getting current ip from client env 
    console.log(req.connection.remoteAddress)
    res.send('Hello World!')
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})