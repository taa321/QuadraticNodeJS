//Module dependencies
import {QuadraticCalculator} from './quadratic-calculator';

let calculator = null;

//Potential factory of calculators using different approaches/algorithms
function getInstance (type) {
  if (type === 'quadratic') {
    if (calculator === null) {
      calculator = new QuadraticCalculator();
    }
    return calculator;
  }
  throw new Error('Unknown calculator type ' + type);
}

//Expose calculator instance
export {getInstance};
