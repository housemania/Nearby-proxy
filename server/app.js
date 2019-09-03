const express = require('express');
const bodyParse = require('body-parser');
const app = express();


const port = 3000;

app.use(express.static(__dirname + '/../public'));

app.listen(port, () => console.log(`server listening on port ${port}`));