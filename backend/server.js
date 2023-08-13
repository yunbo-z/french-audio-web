const express = require('express')
const app = express()
const port = 3000
const path = require('path')

app.use(express.static(path.join(__dirname, '/public/')));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/page/home.html');
});
app.get('/vegetables', (req, res) => {
    res.sendFile(__dirname + '/page/vegetables.html');
});
app.get('/conjonction', (req, res) => {
    res.sendFile(__dirname + '/page/conjonction.html');
});
app.get('/signin', (req, res) => {
    res.sendFile(__dirname + '/page/signin.html');
});
app.get('/login', (req, res) => {
    res.sendFile(__dirname + '/page/login.html');
});






app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})