'use strict';

const { server } = require('../server.js');
const supertest = require('supertest');
const mockRequest = supertest(server);
const supergoose = require('@code-fellows/supergoose');
const users = require('../model/Users/users-collection.js');
describe(' user  Model', () => {
  it('can generateToken() and  authenticateToken a  user  ', async () => {
    jest.setTimeout(50000);
    const obj = {
      username: 'bayan34',
      password: '123',
      role: 'user'
      
    };
    
    const record = await users.save(obj);
    const recoed2=await users.generateToken(record)
    const recoed3=await users.authenticateToken(recoed2)


    console.log('recored', await users.generateToken(record));
    
    expect(recoed2).not.toEqual(undefined);
    expect(recoed3.username).toEqual('bayan34');
    expect(recoed3. capabilities[0]).toEqual('read');


  });
  it('can save() a  user  ', async () => {
    jest.setTimeout(50000);
    const obj = {
      username: 'bayan3',
      password: '123',
      role: 'user'
      
    };
    
    const record = await users.save(obj);
    console.log('record', record);
    
    expect(record.username).toEqual('bayan3');
    expect(record.password).not.toEqual('bayan3');
  });
  
  it('can authenticateBasic() a  user  ', async () => {
    jest.setTimeout(50000);
    const obj = {
      username: 'bayan3',
      password: '123',
      role: 'user'
      
    };
    
    const record = await users.save(obj);
    const record2 = await users.authenticateBasic('bayan3','123');

    console.log('record', record);
    
    expect(record2.username).toEqual('bayan3');
    expect(record2.password).not.toEqual(undefined);
  });
 
  it('can list() a  user  ', async () => {
    jest.setTimeout(50000);
    const obj = {
      username: 'bayan5',
      password: '123',
      role:"user"
    };

    const record = await users.save(obj);
   
    const record3 = await users.list();

    console.log('record3', record3);

    expect(record3[0].username).toEqual('bayan34');
  });
});
