// Module dependencies
import express from 'express'

// Set of tools to generate interactive API documentation
// which is going to be used to try API calls in a browser
import swaggerJSDoc from 'swagger-jsdoc'
import swaggerUi from 'swagger-ui-express'
import Validator from 'swagger-model-validator'

// Swagger router
const router = express.Router()

// Initialize options for Swagger
const options = {
  swaggerDefinition: {
    info: {
      title: 'Quadratic Calculator REST API - Swagger',
      version: '1.0.0',
      description: 'RESTful API implementing HTTP GET and POST',
      contact: {
        email: 'taa321@yahoo.com'
      }
    },
    tags: [
      {
        name: 'calculate-equation',
        description: 'Quadratic API'
      }
    ],
    schemes: ['http'],
    host: 'localhost:3000',
    basePath: '/api'
  },
  apis: ['./api/controllers/calculate-equation.js', './api/models/numeric-coefficient.js', './api/models/quadratic-solution.js']
}

const swaggerSpec = swaggerJSDoc(options)
// const validator = new Validator(swaggerSpec)
Validator(swaggerSpec)

// Publish Swagger specifications
router.get('/json', function (req, res) {
  res.setHeader('Content-Type', 'application/json')
  res.send(swaggerSpec)
})
router.use('/', swaggerUi.serve, swaggerUi.setup(swaggerSpec))

// Request, response validation using Swagger specifications
function validateModel (name, model) {
  const responseValidation = swaggerSpec.validateModel(name, model, false, true)
  if (!responseValidation.valid) {
    console.error(responseValidation.errors)
    throw new Error('Model doesn\'t match Swagger contract')
  }
}

// Expose Swagger router so it can be called in the application
export { router as swaggerControllerRouter }

// Expose model validation so it can be called on inputs and outputs of the calculation
export { validateModel }
