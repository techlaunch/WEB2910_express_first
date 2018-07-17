const express = require('express');
const logger = require('morgan');
const path = require('path');

const app = express();

// log requests
app.use(logger('dev'));

// static files
app.use(express.static(path.join(__dirname, 'public')));

app.use(express.static(path.join(__dirname, 'public', 'css')));

app.listen(3000, () => console.log('Listening on port 3000'));

console.log('try: ');
console.log('   GET /hello.txt');
console.log('   GET /js/app.js');
console.log('   GET /style.css');

