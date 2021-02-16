const express = require('express');

const config = require('./config/app');

const app = express();

// route
app.get('/home', (req, res) => {
  return res.send('Home Screen');
});

const port = config.appPort;

app.listen(port, () => {
  console.log(`Server running on port: ${port}`)
});

console.log('hello world');