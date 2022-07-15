const express = require('express');
const { default: axios } = require("axios")
const route = require('./route/route.js');
const bodyParser = require('body-parser')
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/', route);


module.exports = app