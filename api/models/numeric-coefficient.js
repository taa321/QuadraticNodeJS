// Input parameters for quadratic equation
/**
 * @swagger
 * definitions:
 *   NumericCoefficient:
 *     type: object
 *     required:
 *       - a
 *       - b
 *       - c
 *     properties:
 *       a:
 *         type: number
 *         description: Quadratic coefficient A
 *         pattern: '^(-|)[^0]*$'
 *       b:
 *         type: number
 *       c:
 *         type: number
 */
class NumericCoefficient {
  constructor (a, b, c) {
    this.a = a
    this.b = b
    this.c = c
  }
}

export { NumericCoefficient }
