const express = require('express')
const app = express()
    // Sample web module 
    // var getIP = require('ipware')().get_ip;

const DeviceDetector = require('node-device-detector');
const detector = new DeviceDetector;



const port = 3000

app.get('/ip', (req, res) => {

    res.send(req.ip)
})


app.get('/deviceinfo', (req, res) => {

    res.send(req.device.type)
})
app.get('/deviceinfo', (req, res) => {

    res.send("?ip")
})



app.listen(port, () => {

    console.log(`Example app listening at http://localhost:${port}`)
})