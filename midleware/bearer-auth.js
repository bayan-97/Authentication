
const users = require('../model/Users/users-collection.js');
module.exports = (req, res, next) => {
  console.log("vv",req.headers.authorization)
  if (!req.headers.authorization) {
    next('Invalid Login');
  } else {

    const token = req.headers.authorization.split(' ').pop();
    console.log('__TOKEN__', token);
    console.log('__TOKEN__',  users
    .authenticateToken(token));

    users
      .authenticateToken(token)
      .then((validUser) => {
  console.log("vvbv",validUser)

        req.user = validUser;
        next();
      })
      .catch(() => {
        next('Invalid Login');
      });
  }
};