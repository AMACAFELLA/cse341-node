const routes = require('express').Router();

routes.get('/', (req, res) => {
    res.send('Angus Macapella!');
});

module.exports = routes;

