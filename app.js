// const express = require('express');
// const app = express();

// app.get('/', (req, res) => {
//     res.send('Hello world!')
// }).listen(8080);

// WORKING WITH EXPRESS GET REQUESTS
// const express = require('express');
// const app = express();

// app.get('/', (req, res) => {
//     res.send('Hello world!')
// })
// app.get('/route', (req, res) => {
//     res.send('Another route!')
// })

// QUERYSTRINGS AND ROUTE PARAMETERS
// app.get('/route/:name/:age', (req, res) => {
//     console.log(req.params);
//     console.log(req.query);
//     res.send(req.params.name + " : " + req.params.age)
// })

 
// SERVING STATIC FILES WITH EXPRESS
const express = require('express');
const path = require('path');
const app = express();

app.use('/public', express.static(path.join(__dirname, 'static')))

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'static', 'index.html'))
})

app.listen(8080);