const express = require('express');
//set up express app
app = express();

app.use('/manutd', require('./routes/api'));

//Listen at port 8020
app.listen(8020, function(){
    console.log('listening on http://localhost:8020');
});