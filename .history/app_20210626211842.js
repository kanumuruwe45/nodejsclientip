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
    // console.log(req.ip)
    res.send(ipInfo)
    const userAgent = 'Mozilla/5.0 (Linux; Android 5.0; NX505J Build/KVT49L) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/43.0.2357.78 Mobile Safari/537.36';
    const result = detector.detect(userAgent);

    console.log('result parse', result);
    res.send(ipInfo)
})

app.listen(port, () => {

    console.log(`Example app listening at http://localhost:${port}`)
})