import {QuadraticCalculator} from './quadratic-calculator';

let calculator = null;

function getInstance (type) {
  if (type === 'quadratic') {
    if (calculator === null) {
      calculator = new QuadraticCalculator();
    }
    return calculator;
  }
  throw new Error('Unknown calculator type ' + type);
}

export {getInstance};
