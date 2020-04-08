About
=====

Quadratic Equation Calculator RESTful service with unit tests using Node.JS, Express and Swagger.

Installation
============

    git clone https://github.com/taa321/QuadraticNodeJS.git
    cd QuadraticNodeJS
    npm install
    npm start

Swagger documentation - HTML and JSON
===================================

* Swagger UI:
 
     http://localhost:3000/api/docs

* JSON: 

     http://localhost:3000/api/docs/json

REST API Endpoints
==================

* *GET* http://localhost:3000/api/calculate-equation
* *POST* http://localhost:3000/api/calculate-equation

Curl examples
==================

* curl -X GET "http://localhost:3000/api/calculate-equation?a=1&b=2&c=3" -H "accept: application/json"

* curl -X POST "http://localhost:3000/api/calculate-equation" -H "accept: application/json" -H "Content-Type: application/json" -d "{ \"a\": 3, \"b\": 2, \"c\": 1}"
