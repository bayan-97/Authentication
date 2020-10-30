'use strict';
const express = require('express');
const app = express();
const morgan = require('morgan');
const cors = require('cors');
const users = require('./model/Users/users-collection.js');
const userRouter = require('./extra-routes.js');
const PORT = process.env.PORT || 3000;
require('dotenv').config()

app.use(express.static('./public'));



app.use(express.json());
app.use(morgan('dev'));
app.use(cors());


app.use('/', userRouter);


module.exports = {
  server: app,
  start: (port) => {
    app.listen(port, () => {
      const PORT = port || process.env.PORT || 5000;
      console.log(`up and running on port ${PORT}`);
    });
  },
};