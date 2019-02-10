const express = require('express');
const bodyParser = require('body-parser');

//set up express app
app = express();

//body-parser for json data
app.use(bodyParser.json());

//api routes
app.use('/manutd', require('./routes/api'));

//Listen at port 8020
app.listen(8020, function(){
    console.log('listening on http://localhost:8020');
});