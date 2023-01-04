const express = require('express');
const { name } = require('../controllers/index');


const routes = express.Router();

routes.get('/', name);

module.exports = routes;

