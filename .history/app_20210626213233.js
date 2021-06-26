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
    var temp = req.headers['user-agent']
    res.send(temp)
})
app.get('/', (req, res) => {
    res.send("/ip")
    res.send("/deviceinfo")
})



app.listen(port, () => {

    console.log(`Example app listening at http://localhost:${port}`)
})



var express = require('express');
var app = express();
var device = require('express-device');
app.use(device.capture());

app.get('/hello', function(req, res) {
    res.send("Hi to " + req.device.type.toUpperCase() + " User");
});

app.listen(3000);
console.log("Listening to Port 3000");