const express = require('express');
require('dotenv').config();

const app = express();

const port = process.env.PORT || 8888;

// doc file json
app.use(express.json());
// doc data array , object
app.use(express.urlencoded({ extended: true }));

app.use('/', (req, res) => {
  res.send('SERVER ON');
});

app.listen(port, () => {
  console.log('server run' + port);
});
