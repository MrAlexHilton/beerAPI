const express = require('express');
const beerRouter = express.Router();
const Beer = require('../models/beer');

beerRouter.get('/', (req, res) => {
    Beer.find((err, beers) => {
        if (err) {
            res.status(400);
            res.send(err);
        } else {
            res.json(beers);
        }
    });
 });



beerRouter.get('/:beer_id', (req, res) => {
    Beer.findById(req.params.beer_id, (err, beer) => {
        if (err){
            res.status(400).send(err);
            
        } else {
            res.json(beer);
        }
    });
});

beerRouter.post('/', (req, res) => {
    let beer = new Beer();
    beer.name = req.body.name;
    beer.rating = req.body.rating;
    beer.save((err, document) => {
        if(err){
            console.log(`error saving beer:\n${err}`);
            res.status(400);
            res.send(err);
        } else {
            res.send(`Saved your ${document}`);
        }
    });
});


beerRouter.delete('/:beer_id', (req, res) => {
    Beer.deleteOne({
        _id: req.params.beer_id
    }, (err) => {
        if (err) {
            res.status(400).send(err);
        } else {
            res.send(`Successfully deleted beer with id: ${req.params.beer_id}`);
        }
    });
});

beerRouter.put('/:beer_id', (req, res) => {
    Beer.findById(req.params.beer_id, (err, beer) => {
        if(err){
            res.status(400).send(err)
        } else {
            beer.name = req.body.name;
            beer.rating = req.body.rating;

            beer.save((err, beer) => {
                if (err) {
                    res.status(400).send(err);
                } else {
                    res.send(`Beer updated!:\n${beer}`);
                }
            });
        }
    });
});

beerRouter.use('/', (req, res) => {
    res.send('Beer router is working!');
});

module.exports = beerRouter;