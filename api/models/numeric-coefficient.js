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
 *       b:
 *         type: number
 *       c:
 *         type: number
 */
//Contains input parameters of quadratic equation
class NumericCoefficient {
  constructor (a, b, c) {
    this.a = a;
    this.b = b;
    this.c = c;
  }
}

export {NumericCoefficient};