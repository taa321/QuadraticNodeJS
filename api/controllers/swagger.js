const express = require('express')
const router = express.Router()

const options = {
  swaggerDefinition: {
    info: {
      title: 'REST - Swagger',
      version: '1.0.0',
      description: 'REST API with Swagger doc',
      contact: {
        email: 'taa321@yahoo.com'
      }
    },
    tags: [
      {
        name: 'quadratic-equation-controller',
        description: 'Quadratic API'
      }
    ],
    schemes: ['http'],
    host: 'localhost:3000',
    basePath: '/api'
  },
  apis: ['./api/controllers/calculate-equation.js', './api/models/numeric-coefficient.js', './api/models/quadratic-solution.js']
}

const swaggerJSDoc = require('swagger-jsdoc')
const swaggerUi = require('swagger-ui-express')
const swaggerSpec = swaggerJSDoc(options)
require('swagger-model-validator')(swaggerSpec)

router.get('/json', function (req, res) {
  res.setHeader('Content-Type', 'application/json')
  res.send(swaggerSpec)
})

router.use('/', swaggerUi.serve, swaggerUi.setup(swaggerSpec))

function validateModel (name, model) {
  const responseValidation = swaggerSpec.validateModel(name, model, false, true)
  if (!responseValidation.valid) {
    console.error(responseValidation.errors)
    throw new Error(`Model doesn't match Swagger contract`)
  }
}

export { router,validateModel }
