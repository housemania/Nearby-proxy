const express = require('express');
const bodyParse = require('body-parser');
const request = require('request');
const app = express();


const port = 3000;

app.use(express.static(__dirname + '/../public'));
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  next();
});

app.listen(port, () => console.log(`server listening on port ${port}`));