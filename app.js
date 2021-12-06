
const path = require('path');
const express = require('express');
const morgan = require('morgan');
const app = express();
const fs = require('fs');
module.exports = app;

// logging middleware
app.use(morgan('short'))

// body parsing middleware
app.use(express.json())

//app.get('/', (req, res)=> res.sendFile(path.join(__dirname, 'public/index.html')));

// static file-serving middleware plus it sends public/index.html
app.use('/',express.static(path.join(__dirname, 'public')))
app.use(express.static(path.join(__dirname, 'public')))
//app.use(express.static(path.join(__dirname, '../dist')))
app.post('/contactme', (req, res, next) => {
  const {name, email, msg } = req.body;
  const stream = fs.createWriteStream("contactme.txt", {flags:'a'});
  stream.write(`${new Date().toISOString()} - contact me form - from: ${name} / email: ${email} / message: ${msg}` + "\n");
  stream.end();
  res.sendStatus(200);
})

app.use('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/index.html'));
})

// app.use('*', (req, res, next) => {
//   res.send('invalid page')
// })

// any remaining requests with an extension (.js, .css, etc.) send 404
// app.use((req, res, next) => {
//   if (path.extname(req.path).length) {
//     const err = new Error('Not found')
//     err.status = 404
//     next(err)
//   } else {
//     next()
//   }
// })

// sends index.html
// app.use('*', (req, res) => {
//   res.sendFile(path.join(__dirname, 'index.html'));
// })

// // error handling endware
// app.use((err, req, res, next) => {
//   console.error(err)
//   console.error(err.stack)
//   res.status(err.status || 500).send(err.message || 'Internal server error.')
// })
