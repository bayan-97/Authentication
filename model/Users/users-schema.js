const mongoose = require('mongoose');
const { unescape } = require('querystring');
// const bcrypt = require('bcrypt');
// const jwt = require('jsonwebtoken');
// const SECRET = process.env.SECRET || 'mysecret';
const user = mongoose.Schema({
    username: { type: String, require: true },
    password: { type: String, required: true },
    role: { type: String, required: true },

});
// user.methods.save = async function(record) {
   
//     const newRecord = new  mongoose.model('user', user).record;
//      let  username=newRecord.username

//       if ( this.read(username)){
//         newRecord.password = await bcrypt.hash(newRecord.password, 5);
//          return await newRecord.save();

//         //   this.model.find({ username }) = newRecord;
        
        
//       }
//       return Promise.reject();

//   };

module.exports = mongoose.model('user', user);