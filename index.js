// const a = 1;
// const b = 2;

// console.log(a + b);

console.log(12);

var express = require('express');
var app = express()

var router = express.Router()

app.get('/', (req, res) => {
    res.send('hello world!!!')
})

app.use('/', router)
app.listen(1000)