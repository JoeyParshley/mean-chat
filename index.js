const express = require('express');

const config = require('./config/app');

const router = require('./router');

const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({extended:true})); // used to parse URL-encoded bodies
app.use(bodyParser.json()); // used to parse json bodies

app.use(router);

const port = config.appPort;

app.listen(port, () => {
  console.log(`Server running on port: ${port}`)
});
