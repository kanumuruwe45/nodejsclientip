const express = require('express')
var device = require('express-device');
const app = express()

const port = 3000

app.get('/ip', (req, res) => {
    var hostip = req.ip
    console.log(temp.slice(7))
    res.send(hostip.slice)
})


app.get('/deviceinfo', (req, res) => {
    var temp = req.headers['user-agent']
    res.send(temp)
})
app.get('/', (req, res) => {
    // console.log(req.device)
    res.send("Hi to " + req.device + " User");
})


app.listen(port, () => {

    console.log(`Example app listening at http://localhost:${port}`)
})

app.use(device.capture());