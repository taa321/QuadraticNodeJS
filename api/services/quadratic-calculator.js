//Module dependencies
import {NumericCoefficient} from '../models/numeric-coefficient';
import {QuadraticSolution} from '../models/quadratic-solution';

class QuadraticCalculator {
  constructor () {
  }
  
//This method implements the actual quadratic formula algorithm to solve quadratic equation
  calculate (NumericCoefficient) {
	  
	  	const a = NumericCoefficient.a;
	  	const b = NumericCoefficient.b;
	  	const c = NumericCoefficient.c;

	  	let discriminant = b * b - 4 * a * c;

	  	let root1 = 0;
	  	let root2 = 0;
	  	let realPart = 0;
	  	let imaginaryPart = 0;
	  	let rootType = '';
        
	  	//Based on the value of the discriminant apply specific formulas to calculate solution
	  	if (discriminant > 0)	  	{
	  	    root1 = (-b + Math.sqrt(discriminant)) / (2 * a);
	  	    root2 = (-b - Math.sqrt(discriminant)) / (2 * a);
	  	    rootType = 'Distinct real roots';
	  	}	  	else if (discriminant == 0)	  	{
	  	    root1 = root2 = -b / (2 * a);
	  	    rootType = 'Equal real roots';
	  	}	  	else	  	{
	  	    realPart = -b / (2 * a);
	  	    imaginaryPart = Math.sqrt(-discriminant) / (2 * a);
	  	    rootType = 'Complex roots';
	  	}
	  	
        //Put calculation results into the container
	  	const solution = new QuadraticSolution(rootType, root1, root2, realPart, imaginaryPart);

    return solution;
  }
  }

//Expose the calculator so it can be instantiated in a factory
export {QuadraticCalculator};