// Module dependencies
import chai from 'chai'
import { QuadraticCalculator } from '../api/services/quadratic-calculator'
import { NumericCoefficient } from '../api/models/numeric-coefficient'
import { validateModel } from '../api/controllers/swagger'

const expect = chai.expect
const calculator = new QuadraticCalculator()

describe('Quadratic calculator test', function () {
  const numericCoefficient = new NumericCoefficient()
  describe('', function () {
    it('should calculate roots of quadratic equation: x^2+2x+3=0 and get complex roots', function (done) {
      numericCoefficient.a = 1
      numericCoefficient.b = 2
      numericCoefficient.c = 3
      const result = calculator.calculate(numericCoefficient)
      expect(result.rootType).to.equal('Complex roots')
      expect(result.root1).to.equal(0)
      expect(result.root2).to.equal(0)
      expect(result.imaginaryPart).to.equal(-1)
      expect(result.realPart).to.equal(1.4142135623730951)
      done()
    })
    it('should calculate roots of quadratic equation: 2x^2+7x-6=0 and get distict real roots', function (done) {
      numericCoefficient.a = 2
      numericCoefficient.b = 7
      numericCoefficient.c = 6
      const result = calculator.calculate(numericCoefficient)
      expect(result.rootType).to.equal('Distinct real roots')
      expect(result.root1).to.equal(-1.5)
      expect(result.root2).to.equal(-2)
      expect(result.imaginaryPart).to.equal(0)
      expect(result.realPart).to.equal(0)
      done()
    })
    it('should calculate roots of quadratic equation: 4x^2-4x+1=0 and get equal real roots', function (done) {
      numericCoefficient.a = 4
      numericCoefficient.b = -4
      numericCoefficient.c = 1
      const result = calculator.calculate(numericCoefficient)
      expect(result.rootType).to.equal('Equal real roots')
      expect(result.root1).to.equal(0.5)
      expect(result.root2).to.equal(0.5)
      expect(result.imaginaryPart).to.equal(0)
      expect(result.realPart).to.equal(0)
      done()
    })
    it('should make sure "a" is not 0: 0x^2-1x+1=0 and get validation exception', function (done) {
      numericCoefficient.a = 0
      numericCoefficient.b = -1
      numericCoefficient.c = 1
      expect(function () { validateModel('NumericCoefficient', numericCoefficient) }).to.throw('Model doesn\'t match Swagger contract:a does not match the pattern ^(-|)[^0]*$')
      done()
    })
    it('should make sure "a", "b" and "c" cannot be nulls and get validation exception', function (done) {
      numericCoefficient.a = null
      numericCoefficient.b = null
      numericCoefficient.c = null
      expect(function () { validateModel('NumericCoefficient', numericCoefficient) }).to.throw('Model doesn\'t match Swagger contract:a is a required field,b is a required field,c is a required field')
      done()
    })
    it('should make sure "a", "b" and "c" cannot contain letters and get validation exception', function (done) {
      numericCoefficient.a = 'aaa'
      numericCoefficient.b = 'bbb'
      numericCoefficient.c = 'ccc'
      expect(function () { validateModel('NumericCoefficient', numericCoefficient) }).to.throw('Model doesn\'t match Swagger contract:a (aaa) is not a type of number,b (bbb) is not a type of number,c (ccc) is not a type of number')
      done()
    })
  })
})
