'use strict';

const express = require('express');
const router = express.Router();
const basicAuth = require('./midleware/basicAuth.js');
const oauth = require('./midleware/aother.js');

const users = require('./model/Users/users-collection.js');

router.post('/signup',signupHandler);


function signupHandler(req, res){
    console.log(req.body)
  users.save(req.body).then((user) => {
      console.log(req.body)
    const token = users.generateToken(user);
    res.status(201).json({ token });
  })}


router.post('/signin', basicAuth, (req, res) => {
    console.log(req.token)
  //req.token is coming from the mw
  res.status(201).json({ token: req.token, user:req.user});
});

router.get('/users', basicAuth, (req, res) => {
    users.list().then(data=>{
console.log(data)
        res.json(data);
    })
});
router.get('/oauth', oauth, (req, res) => {
  res.json({ token: req.token });
});

module.exports = router; 