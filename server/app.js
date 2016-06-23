import express from 'express';
import morgan from 'morgan';
import uuid from 'node-uuid';
import initRoutes from './routes';


morgan.token('id', function getId (req) {
  return req.id
})
function assignId (req, res, next) {
  req.id = uuid.v4()
  next()
}

const app = express()

app.use(assignId)
app.use(morgan(':id :method :url :response-time'))
initRoutes(app);
module.exports = app;
