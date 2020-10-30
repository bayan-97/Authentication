'use strict';
const  Usermodel = require('./users-schema.js');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const roles = {
  user: ['read'],
  Writer:['read', 'create'],
  editor: ['read', 'create', 'update'],
  admin: ['read', 'create', 'update', 'delete'],
};
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

        
        
      }
      return Promise.reject();

  }

  
 async authenticateBasic  (user, password) {
  console.log("cccc",user, password)
     let username=user
     const obj=await this.model.findOne({ username })

    const valid = await bcrypt.compare(password,obj.password );
    return valid ? obj: Promise.reject();
  };
  
 generateToken(user) {

    const token = jwt.sign({ username: user.username, }, SECRET,{
      expiresIn: '18000' 
    });
  
    return token;
  };
  can(permission,user){
      try {
        if (user.capabilities.includes(permission)) {
          return Promise.resolve(true);
        } else {
          return Promise.reject();
        }
      } catch (e) {
        return Promise.reject(e.message);
      }
   
}
// list = async () =>  await this.model.find({});
async list() {
 
  return await this.model.find({});
};
async  authenticateToken(token){
      try {
        const tokenObject = jwt.verify(token, SECRET);
        console.log('TOKEN OBJECT', tokenObject);
        if (this.read(tokenObject.username)) {
          return Promise.resolve(tokenObject);
        } else {
          return Promise.reject();
        }
      } catch (e) {
        return Promise.reject(e.message);
      }
    }

}
class User extends Usercat{
    constructor() {
      super(Usermodel);
    }}
 


module.exports = new User();
