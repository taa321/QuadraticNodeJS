// Module dependencies
import chai from 'chai'
import { QuadraticCalculator } from '../api/services/quadratic-calculator'
import { NumericCoefficient } from '../api/models/numeric-coefficient'

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
  })
})
