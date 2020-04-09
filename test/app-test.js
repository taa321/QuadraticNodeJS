// Module dependencies
import request from 'supertest'
import chai from 'chai'
import { application, server } from '../app.js'

const expect = chai.expect

describe('API Tests', function () {
  const numericCoefficient = {
    a: 1,
    b: 2,
    c: 3
  }
  describe('GET api/calculate-equation?a=1&b=2&c=3', function () {
    it('should calculate roots of quadratic equation: x^2+2x+3=0', function (done) {
      request(application).get('/api/calculate-equation?a=1&b=2&c=3').end(function (err, res) {
        expect(res.statusCode).to.equal(200)
        expect(res.body.rootType).to.equal('Complex roots')
        expect(res.body.root1).to.equal(0)
        expect(res.body.root2).to.equal(0)
        expect(res.body.imaginaryPart).to.equal(-1)
        expect(res.body.realPart).to.equal(1.4142135623730951)
        expect(err).to.be.a('null')
        done()
      })
    })
  })
  describe('POST api/calculate-equation -d "{ "a": 1, "b": 2, "c": 3}"', function () {
    it('should calculate roots of quadratic equation: x^2+2x+3=0', function (done) {
      request(application).post('/api/calculate-equation').send(numericCoefficient).end(function (err, res) {
        expect(res.statusCode).to.equal(200)
        expect(res.body.rootType).to.equal('Complex roots')
        expect(res.body.root1).to.equal(0)
        expect(res.body.root2).to.equal(0)
        expect(res.body.imaginaryPart).to.equal(-1)
        expect(res.body.realPart).to.equal(1.4142135623730951)
        expect(err).to.be.a('null')
        done()
      })
    })
  })
})

server.close()
