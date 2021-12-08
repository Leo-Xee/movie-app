require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');

const app = express();
const port = process.env.PORT || 5000;

const URI = process.env.MONGO_URI;
mongoose
  .connect(URI)
  .then(() => console.log('MongoDB Connected!!'))
  .catch((e) => console.log(e));

app.get('/', (req, res) => {
  res.send('Hello world!!');
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
