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
// app.get('/user', bearer, (req, res) => {
//   res.json(req.user);
// });

// app.post('/signup', (req, res) => {
//     console.log(req.body)
//   users.save(req.body).then((user) => {
//       console.log(req.body)
//     const token = users.generateToken(user);
//     res.status(201).json({ token });
//   });
// });

// app.post('/signin', basicAuth, (req, res) => {
//     console.log(req.token)
//   //req.token is coming from the mw
//   res.status(201).json({ token: req.token, user:req.user});
// });

// app.get('/users', basicAuth, (req, res) => {
//     users.list().then(data=>{
// console.log(data)
//         res.json(data);
//     })
// });


// app.get('/', (req, res) => {
//   res.send('Hello World');
// });



// app.get('/bad', (req, res) => {
//   throw new Error('a test error');
// });




// app.use('*', notFoundHandler);
// app.use(errorHandler);

module.exports = {
  server: app,
  start: (port) => {
    app.listen(port, () => {
      const PORT = port || process.env.PORT || 5000;
      console.log(`up and running on port ${PORT}`);
    });
  },
};