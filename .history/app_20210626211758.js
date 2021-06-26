const express = require('express')
const app = express()
    // Sample web module 
    // var getIP = require('ipware')().get_ip;

const DeviceDetector = require('node-device-detector');
const detector = new DeviceDetector;



const port = 3000

app.get('/', (req, res) => {
    var ipInfo = getIP(req);

    // Code to be written here for getting current ip from client env 
    console.log(req.ip)
    res.send(ipInfo)
    console.log('result parse', result);
})

app.listen(port, () => {

    console.log(`Example app listening at http://localhost:${port}`)
})