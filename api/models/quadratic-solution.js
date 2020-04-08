/**
 * @swagger
 * definitions:
 *   QuadraticSolution:
 *     type: object
 *     required:
 *       - rootType
 *       - root1
 *       - root2
 *       - imaginaryPart
 *       - realPart
 *     properties:
 *       rootType:
 *         type: string
 *       root1:
 *         type: number
 *       root2:
 *         type: number
 *       imaginaryPart:
 *         type: number
 *       realPart:
 *         type: number
 */

//Contains the results of quadratic equation calculation
class QuadraticSolution {
  constructor (rootType, root1, root2, imaginaryPart, realPart) {
    this.rootType = rootType;
    this.root1 = root1;
    this.root2 = root2;
    this.imaginaryPart = imaginaryPart;
    this.realPart = realPart;
  }
}

export {QuadraticSolution};