const express = require('express');
const app = express();

app.use('/', (req, res)=>{
    console.log('Something hit me!');
    res.send(`<h1>Welcome to the beer API</h1>`);
});

const port = process.env.PORT || 4444

app.listen(port, ()=>{
    console.log(`Listening on port ${port}...`);
});