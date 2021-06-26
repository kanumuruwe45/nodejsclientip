const express = require('express')
const app = express()
    // Sample web module 
var getIP = require('ipware')().get_ip;


const port = 3000

app.get('/', (req, res) => {
    var ipInfo = getIP(req);

    // Code to be written here for getting current ip from client env 
    console.log(ipInfo)
    res.send(ipInfo)
})

app.listen(port, () => {

    console.log(`Example app listening at http://localhost:${port}`)
})