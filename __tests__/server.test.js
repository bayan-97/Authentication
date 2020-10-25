'use strict';
const { server } = require('../server.js');
const supertest = require('supertest');
const { request } = require('express');
const mockRequest = supertest(server);
const supergoose = require('@code-fellows/supergoose');

describe('api server products', () => {
    it('POST to /signup to create a new user', async () => {
      jest.setTimeout(500000);
      let res1 = await mockRequest.post('/signup').send({username:"bayan",password:"123"});
      console.log("res1",res1.headers)
      const response =res1.body.token
  
      expect(res1.status).toBe(201);
      expect(res1.body.token).toEqual(response);
    });
    // it('POST to /signin to login as a user (use basic auth)', async () => {
    //     jest.setTimeout(500000);
    //     let res1 = await mockRequest.post('/signin')
    //     console.log("res1",res1.body)
    //     const response =res1.body.token
    // res1.headers
    //     expect(res1.status).toBe(201);
    //     expect(res1.body.token).toEqual(response);
    //   });
    // it('should respond with post for post', async () => {
    //   jest.setTimeout(50000);
    //   let res1 = await mockRequest
    //     .post('/api/v1/products')
    //     .send({ name: 'Joe',  category: 'm', description: 'mm' });
    //   const res = await mockRequest.get(`/api/v1/products`);
    //   const response = {
    //     __v: 0,
    //     name: 'Joe',
    //      category: 'm',
    //     description: 'mm',
    //     _id: `${res1.body._id}`,
    //   };
  
    //   expect(res.status).toBe(302);
    //   expect(res.body[1]).toEqual(response);
    // });
    // it('should respond with  for put', async () => {
    //   jest.setTimeout(50000);
    //   let res3 = await mockRequest
    //     .post('/api/v1/products')
    //     .send({ name: 'Joe',  category: 'm', description: 'mm' });
  
    //   const res1 = await mockRequest
    //     .put(`/api/v1/products/${res3.body._id}`)
    //     .send({
    //       name: 'Joeee',
    //        category: 'm',
    //       description: 'mm',
    //     });
    //     console.log( "aa",res1.body)
    //   const res = await mockRequest.get(`/api/v1/products/${res3.body._id}`);
    //   console.log("lll",res.body)
    //   const response = {
    //     _id: `${res3.body._id}`,
    //     name:'Joeee',
    //      category: 'm',
    //     description: 'mm',
    //     __v: 0,
    //   };
  
    //   expect(res.status).toBe(302);
    //   expect(res.body).toEqual(response);
    // });
    // it('should respond with post for delete', async () => {
    //   jest.setTimeout(50000);
    //   let res1 = await mockRequest
    //     .post('/api/v1/products')
    //     .send({ name: 'Joe',  category: 'm', description: 'mm' });
    //   await mockRequest.delete(`/api/v1/products/${res1.body._id}`);
    //   const response = {
    //     __v: 0,
    //     name: 'Joe',
    //     _id: `${res1.body._id}`,
    //      category: 'm',
    //     description: 'mm',
    //   };
    //   const res = await mockRequest.get(`/api/v1/products/${res1.body._id}`);
    //   expect(res.status).toBe(302);
    //   expect(res.body).not.toEqual(response);
    // });
  });