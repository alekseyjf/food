const express = require('express');
const app = express();
const config = require('config');
const bodyParser = require('body-parser');

app.use(bodyParser.json());// читать json

app.use('/api', require('./routes') );

app.listen(
    config.server.port,
    ()=> console.log(`App started on port ${config.server.port}`)
);

app.use(function(err, req, res, next) {
    console.error(err.stack);
    res.status(500).send('Something broke!');
});