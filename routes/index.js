const routes = require('express').Router();
import name from '../controllers/index';

routes.get('/', name.index);

module.exports = routes;

