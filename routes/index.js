const routes = require('express').Router();

routes.get('/', (req, res) => {
    res.send("Bryce Williams")
})

module.exports = routes;