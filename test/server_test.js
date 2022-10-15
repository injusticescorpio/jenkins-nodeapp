const request = require('supertest');
const app=require('../app')
// const { expect } = require('chai')
describe("request method testing",function(){
    it("should return a success message",function(done){
        request(app)
      .get('/')
      .set('Accept', 'application/json')
      .expect(200,'hello node app1',done)
    })
})