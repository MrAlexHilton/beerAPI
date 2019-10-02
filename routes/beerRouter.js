const express = require('express');
const beerRouter = express.Router();

beerRouter.get('/', (req, res) => {
    //send beers
});

beerRouter.post('/', (req, res) => {
    // save a beer
});

beerRouter.use('/', (req, res) => {
    res.send('Beer router is working!');
});

module.exports = beerRouter;