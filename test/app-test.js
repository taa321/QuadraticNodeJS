//Module dependencies
import request from 'supertest';
import {application} from '../app.js';

//Test starting up the application and run the calculation using GET
describe('GET /api/calculate-equation?a=1&b=2&c=3', function() {
  it('return results of quadratic equation calculation', function() {
    return request(application)
      .get('/api/calculate-equation?a=1&b=2&c=3')
      .expect(200)
      .expect('Content-Type',/json/)
      .expect('{"rootType":"Complex roots","root1":0,"root2":0,"imaginaryPart":-1,"realPart":1.4142135623730951}')
  })
})
