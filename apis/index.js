const express = require('express');
const cookie = require('cookie-parser');
const cors = require('cors');

const app = express();
const routes = require('./routes');
app.use(cookie());
app.use(express.json());

app.use(cors());

require('./database');

app.use(routes);

app.use('*', (req, res) => {
  res.status(404).json('mauvaise routes');
});

app.listen(3001);
