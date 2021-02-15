const express = require('express');

const app = express();

const port = 3000;

// route
app.get('/home', (req, res) => {
  return res.send('Home Screen');
});

app.listen(port, () => {
  console.log(`Server running on port: ${port}`)
});

console.log('hello world');