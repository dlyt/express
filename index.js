/*!
 * express
 * Copyright(c) 2009-2013 TJ Holowaychuk
 * Copyright(c) 2013 Roman Shtylman
 * Copyright(c) 2014-2015 Douglas Christopher Wilson
 * MIT Licensed
 */

'use strict';

module.exports = require('./lib/express');
const express = require('./lib/express')
var app = express();

app.get('/', function(req, res){
  res.send('Hello World');
});
app.listen(3000);