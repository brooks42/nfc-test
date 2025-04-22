'use strict'

const express = require('express');

var app = module.exports = express()

app.get('/', function(req, res) {
    console.log(`URL: ${JSON.stringify(req.url)}`)
    console.log(`Headers: ${JSON.stringify(req.headers)}`)
    console.log(`Body: ${JSON.stringify(req.body)}`)
    res.send('Hello World')
});

app.get('/:path', function(req, res) {
    console.log(`URL (from path): ${JSON.stringify(req.url)}`)
    console.log(`Headers: ${JSON.stringify(req.headers)}`)
    console.log(`Body: ${JSON.stringify(req.body)}`)
    res.send('Hello World')
});

if (!module.parent) {
    app.listen(3000);
    console.log('Express started on port 3000');
}