// Module dependencies
import { QuadraticCalculator } from './quadratic-calculator'

let calculator = null

// Service factory
function getInstance (type) {
  if (type === 'quadratic') {
    if (calculator === null) {
      calculator = new QuadraticCalculator()
    }
    return calculator
  }
  throw new Error('Unknown calculator type ' + type)
}

// Expose calculator service instance
export { getInstance }
