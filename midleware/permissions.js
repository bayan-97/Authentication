


const users = require('../model/Users/users-collection.js');
module.exports = (capability) => {

  
    return (req, res, next) => {
 
        users.can(capability,req.user)
      .then((validUser) => {
    
        next();
      })
      .catch(() => {
        next('Access Denied');
      });

  };
}