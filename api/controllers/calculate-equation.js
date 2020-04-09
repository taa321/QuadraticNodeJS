// Module dependencies
import { validateModel } from './swagger'
import * as Calculator from '../services/index.js'
import { NumericCoefficient } from '../models/numeric-coefficient'
import express from 'express'

// Get calculator service from the factory
const calculator = Calculator.getInstance('quadratic')

// Controller router
const router = express.Router()

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

// Calculate quadratic equation using RESTful HTTP GET
router.get('/', (req, res, next) => {
  const input = new NumericCoefficient(parseInt(req.query.a, 10), parseInt(req.query.b, 10), parseInt(req.query.c, 10))
  validateModel('NumericCoefficient', input)
  // need to add a=0 into validation!!!!!
  const response = calculator.calculate(input)
  validateModel('QuadraticSolution', response)
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

// Calculate quadratic equation using RESTful HTTP POST
router.post('/', (req, res, next) => {
  validateModel('NumericCoefficient', req.body)
  const response = calculator.calculate(req.body)
  validateModel('QuadraticSolution', response)
  res.send(response)
})

// Expose router so it can be called in the application
export { router as calcControllerRouter }
