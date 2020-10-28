'use strict';
const { server } = require('../server.js');
const supertest = require('supertest');
const { request } = require('express');
const mockRequest = supertest(server);
const supergoose = require('@code-fellows/supergoose');

describe('api server products', () => {
    it('POST to /signup to create a new user', async () => {
      jest.setTimeout(50000);
      let res1 = await mockRequest.post('/signup').send({username:"bayan",password:"123",role:"user"});
      // console.log("res1",res1.headers)
      const response =res1.body.token
  
      expect(res1.status).toBe(201);
      expect(res1.body.token).toEqual(response);
    });
    it('POST to /signin to create a new user', async () => {
      jest.setTimeout(500000);
      let res1 = await mockRequest.post('/signup').send({username:"bayan",password:"123",role:"user"});
      let res2 = await mockRequest.post('/signin').auth("bayan","123");
      // console.log("res1",res1.headers)
      const response =res1.body.token
  
      expect(res1.status).toBe(201);
      expect(res2.body.token).toEqual(response);
      expect(res2.body.user.username).toEqual("bayan");

    });
    it('get to /secret to login as a user (use baerer auth)', async () => {
      jest.setTimeout(500000);
      let res1 = await mockRequest.post('/signup').send({username:"bayan",password:"123",role:"user"});
      let res2 = await mockRequest.post('/signin').auth("bayan","123");
      let res3 = await mockRequest.get('/secret').set("authorization",`bearer ${res2.body.token}`)



      // console.log("res11",body)
      // const response =res1.body.token
  
      expect(res1.status).toBe(201);
      expect(res3.body.username).toEqual("bayan");
      });
      it('POST to /signin to login as a user (use basic auth)', async () => {
        jest.setTimeout(500000);
        let res1 = await mockRequest.post('/signup').send({username:"bayan",password:"123",role:"user"});
        let res2 = await mockRequest.post('/signin').auth("bayan","123");
        let res3= await mockRequest.get('/users').auth("bayan","123")
  
  
  
        console.log("res3",res3.body)
        const response =res1.body.token
    
        // expect(res1.status).toBe(201);
        expect(res3.body[0].username).toEqual("bayan");
        });
        it('POST to /read to login as a user (use basic auth)', async () => {
          jest.setTimeout(500000);
          let res1 = await mockRequest.post('/signup').send({username:"bayan1",password:"123",role:'user'});
          let res2 = await  mockRequest.get('/read').set("authorization",`bearer ${res1.body.token}`)
         
    
    
    
          console.log("res1",res2)
          console.log("res1",res2.body)

          console.log("res2",res1.body)

          // const response =res1.body.token
      
          expect(res1.status).toBe(201);
          expect(res2.text).toEqual("OK!");
          });
          it('POST to /add to login as a user (use basic auth)', async () => {
            jest.setTimeout(500000);
            let res1 = await mockRequest.post('/signup').send({username:"bayan1",password:"123",role:'admin'});
            let res2 = await mockRequest.post('/add').set("authorization",`bearer ${res1.body.token}`)
           
      
      
      
            console.log("res1",res2.body)
            console.log("res2",res1.body)
  
            // const response =res1.body.token
        
            expect(res2.status).toBe(200);
          expect(res2.text).toEqual("OK!");

           
            });  it('POST to /change to login as a user (use basic auth)', async () => {
              jest.setTimeout(500000);
              let res1 = await mockRequest.post('/signup').send({username:"bayan1",password:"123",role:'admin'});
              let res2 = await mockRequest.put('/change').set("authorization",`bearer ${res1.body.token}`)
        
        
        
              console.log("res1",res2.body)
              console.log("res2",res1.body)
    
              // const response =res1.body.token
          
              // expect(res1.status).toBe(201);
              expect(res2.status).toBe(200);
          expect(res2.text).toEqual("OK!");

              });
             it('POST to /remove to login as a user (use basic auth)', async () => {
              jest.setTimeout(500000);
              let res1 = await mockRequest.post('/signup').send({username:"bayan1",password:"123",role:'admin'});
              let res2 = await mockRequest.delete('/remove').set("authorization",`bearer ${res1.body.token}`)
        
        
        
              console.log("res1",res2.body)
              console.log("res2",res1.body)
    
              // const response =res1.body.token
          
              // expect(res1.status).toBe(201);
              expect(res2.status).toBe(200);
          expect(res2.text).toEqual("OK!");

              });

  });