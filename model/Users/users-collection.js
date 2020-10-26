'use strict';
const  Usermodel = require('./users-schema.js');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const SECRET = process.env.SECRET || 'mysecret';
class Usercat {
  constructor(model) {
    this.model = model;
  }
  read(username) {
    if ( username !== undefined) {
      return this.model.findOne({ username });
    }else {
      return undefined
    }
  }

  async save(record){
    
    const newRecord = new this.model(record);
     let  username=newRecord.username

      if ( this.read(username)){
        newRecord.password = await bcrypt.hash(newRecord.password, 5);
         return await newRecord.save();

        //   this.model.find({ username }) = newRecord;
        
        
      }
      return Promise.reject();

  }

  
 async authenticateBasic  (user, password) {
     let username=user
     const obj=await this.model.findOne({ username })
     console.log(obj)
    const valid = await bcrypt.compare(password,obj.password );
    return valid ? obj: Promise.reject();
  };
  
 generateToken(user) {
    const token = jwt.sign({ username: user.username }, SECRET);
    return token;
  };
// list = async () =>  await this.model.find({});
async list() {
 
  return await this.model.find({});
};

}

class User extends Usercat{
    constructor() {
      super(Usermodel);
    }
  
   
  }
 


module.exports = new User();
