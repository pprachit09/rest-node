const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

//set up express app
app = express();

//Connect to mongodb
mongoose.connect('mongodb://localhost/manutd', { useNewUrlParser: true });

//body-parser for json data
app.use(bodyParser.json());

//api routes
app.use('/api', require('./routes/api'));

//error handling
app.use(function(error, req, res, next){
    res.status(422).send({error: error.message});
});

//Listen at port 8020
app.listen(8020, function(){
    console.log('listening on http://localhost:8020');
});