'use strict';

const { server } = require('../server.js');
const supertest = require('supertest');
const mockRequest = supertest(server);
const supergoose = require('@code-fellows/supergoose');
const users = require('../model/Users/users-collection.js');
describe(' category Model', () => {
  it('can save() a  category item', async () => {
    jest.setTimeout(50000);
    const obj = {
      username: 'bayan3',
      password: '123'
    };

    const record = await users.save(obj);
    console.log('record', record);

    expect(record.username).toEqual('bayan3');
    expect(record.password).not.toEqual('bayan3');
  });
//   it('can save() a  category item', async () => {
//     jest.setTimeout(50000);
//     const obj = {
//       username: 'bayan3',
//       password: '123'
//     };

//     const record = await users.save(obj);
//     const record2 = await users.authenticateBasic(
//       record.username,
//       record.password
//     );

//     console.log('record2', record2);

//     expect(record2.username).toEqual('bayan3');
//     expect(record2.password).not.toEqual('bayan3');
//   });

//   it('can authenticateBasic() a  category item', async () => {
//     jest.setTimeout(50000);
//     const obj = {
//       username: 'bayan3',
//       password: '123'
//     };

//     const record = await users.save(obj);
//     const record2 = await users.authenticateBasic(
//       record.username,
//       record.password
//     );

//     console.log('record2', record2);

//     expect(record2.username).toEqual('bayan3');
//     expect(record2.password).not.toEqual('bayan3');
//   });
//   it('can generateToken() a  category item', async () => {
//     jest.setTimeout(50000);
//     const obj = {
//       username: 'bayan3',
//       password: '123'
//     };

//     const record = await users.save(obj);
//     const record2 = await users.authenticateBasic(
//       record.username,
//       record.password
//     );
//     const record3 = await users.generateToken(record2);

//     console.log('record3', record3);

//     expect(record3).not.toEqual(undefined);
//   });
//   it('can list() a  category item', async () => {
//     jest.setTimeout(50000);
//     const obj = {
//       username: 'bayan3',
//       password: '123'
//     };

//     const record = await users.save(obj);
//     const record2 = await users.authenticateBasic(
//       record.username,
//       record.password
//     );
//     const record3 = await users.generateToken(record2);

//     console.log('record3', record3);

//     expect(record3).not.toEqual(undefined);
//   });
});
