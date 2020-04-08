//Module dependencies

//Web application framework
import createApp from 'express';

//HTTP request logger middleware
//Temporary keep "require" format instead of "import" as the combination 
//of the current versions of 
//esm and morgan does not work and gives a deprecated default format message
const logger = require('morgan');

//Body parsing middleware which is going to be used to parse JSON in this application
import bodyParser from 'body-parser';

//Entry point to the quadratic equation calculation
import { calcController } from './api/controllers/calculate-equation';

//Entry point to Swagger
import {swaggerController} from './api/controllers/swagger';

let app = createApp();
const port = 3000;

//Add middleware layers
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use('/api/calculate-equation', calcController);
app.use('/api/docs', swaggerController);

//Add very basic error handling and some special handling for the most common errors 
app.use(function (req, res, next) {
  let err = new Error('Not Found');
  err.status = 404;
  next(err);
})
app.use(function (err, req, res, next) {
  console.error(`Error occured! ${err}`);
  const error = {
    status: err.status || 500,
    message: err.message
  }
  res.status(error.status).send(error);
})

function onError (error) {
  if (error.syscall !== 'listen') {
    throw error;
  }
  const bind = typeof port === 'string'
        ? 'Pipe ' + port
        : 'Port ' + port;
  //Handle specific listener errors with friendly messages
  switch (error.code) {
    case 'EACCES':
      console.error(bind + ' requires elevated privileges');
      process.exit(1);
    case 'EADDRINUSE':
      console.error(bind + ' is already in use');
      process.exit(1);
    default:
      throw error;
  }
}

function onListening () {
  const addr = app.address();
  const bind = typeof addr === 'string'
        ? 'pipe ' + addr
        : 'port ' + addr.port;
  console.log('\nListening on ' + bind);
}

//Start the application
app.listen(port);
app.on('error', onError);
app.on('listening', onListening);
console.log('Server started on port ' + port);

//Expose the application interface for integration testing
export {app as application};
