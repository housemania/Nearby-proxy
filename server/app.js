const express = require('express');
const bodyParse = require('body-parser');
const app = express();


const port = 3000;

app.use(express.static(__dirname + '/../client'));

// app.get('/', (req, res) => {
//   res.send('hello world!')
// });


app.listen(port, () => console.log(`server listening on port ${port}`));