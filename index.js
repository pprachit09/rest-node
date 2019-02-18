const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const manutd = require('./models/manutd');
const hat = require('hat');
const user = require('./models/user');

//set up express app
app = express();

//To serve static files
app.use(express.static('public'));

//Connect to mongodb
mongoose.connect('mongodb://localhost/manutd', { useNewUrlParser: true });
mongoose.set('useFindAndModify', false);

//body-parser for json data
app.use(bodyParser.json());

//api routes
app.use('/api', require('./routes/api'));

//error handling
app.use(function(error, req, res, next){
    res.status(422).send({error: error.message});
});
var id = hat();

//view engine
app.set('view engine', 'pug');

//homepage 
app.get('/', function(req, res){
    res.render('homepage');
});

//Listen at port 8020
app.listen(8020, function(){
    console.log('listening on http://localhost:8020');
});
