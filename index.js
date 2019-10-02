const express = require('express');
const app = express();
const beerRouter = require('./routes/beerRouter');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false }))


app.use('/beers', beerRouter);

app.use('/', (req, res)=>{
        res.send(`<h1>Welcome to the beer API</h1>`);
});

const port = process.env.PORT || 4444

mongoose.connect('mongodb://localhost:27017/beers', {
    useNewUrlParser: true
});

mongoose.connection.on('connected', () => {
    console.log('Connected to the beers database')
});


mongoose.connection.on('error', () => {
    console.log('error connecting to the beers database');
});

app.listen(port, ()=>{
    console.log(`Listening on port ${port}...`);
});