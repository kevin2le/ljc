var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var bodyParser = require('body-parser');

var app = express();

app.use(logger('dev'));

var port = process.env.Port || 3001;

app.listen(port, function() {
    console.log(`Express app running on port ${port}`)
});