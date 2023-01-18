const express = require('express');
const app = express();
const port = 3000;


// Inmport Data

var data = require("./data/data.json");

// PUG

app.set('view engine', 'pug');

app.set('views', __dirname + '/views');

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});

app.get('/', (req, res) => {
  // Render the index template, and pass in a variable
  res.render('test', { data: data });
});

