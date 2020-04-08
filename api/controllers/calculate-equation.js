//Module dependencies
import * as Swagger from './swagger';
//
import * as Calculator from '../services/index.js';
import NumericCoefficient from '../models/numeric-coefficient';
import Express from 'express';

const calculator = Calculator.getInstance('quadratic');

const router = Express.Router();

/**
 * @swagger
 * /calculate-equation:
 *   get:
 *     description: Quadratic equation
 *     tags:
 *       - calculations
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: a
 *         description: a numerical coefficient
 *         in: query
 *         required: true
 *         type: number
 *       - name: b
 *         description: b numerical coefficient
 *         in: query
 *         required: true
 *         type: number
 *       - name: c
 *         description: c numerical coefficient
 *         in: query
 *         required: true
 *         type: number
 *     responses:
 *       200:
 *         description: Quadratic equation solution
 *         schema:
 *           $ref: '#/definitions/QuadraticSolution'
 */
router.get('/', (req, res, next) => {
	  const input = new NumericCoefficient(parseInt(req.query.a, 10), parseInt(req.query.b, 10), parseInt(req.query.c, 10));
	  console.log('input is: ' + req.query.a)
	  Swagger.validateModel('NumericCoefficient', input)
	  // need to add a=0 into validation!!!!!
	  const response = calculator.calculate(input)
	  Swagger.validateModel('QuadraticSolution', response)
  res.send(response)
})

/**
 * @swagger
 * /calculate-equation:
 *   post:
 *     description: Quadratic equation
 *     tags:
 *       - calculations
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: Numeric coefficients
 *         description: Numeric coefficients object
 *         in: body
 *         required: true
 *         schema:
 *           $ref: '#/definitions/NumericCoefficient'
 *     responses:
 *       200:
 *         description: Quadratic equation solution
 *         schema:
 *           $ref: '#/definitions/QuadraticSolution'
 */
router.post('/', (req, res, next) => {
  Swagger.validateModel('NumericCoefficient', req.body)
  const response = calculator.calculate(req.body)
  Swagger.validateModel('QuadraticSolution', response)
  res.send(response)
});

//expose the controller so it can be used in application
export { router as calcController};
