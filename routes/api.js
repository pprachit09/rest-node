const express = require('express');
var router = express.Router();
//import manutd schema
const manutd = require('../models/manutd');

router.get('/manutd', function(req, res){
    res.send('got it');
});

router.post('/manutd', function(req, res){
    console.log(req.body);
    manutd.create(req.body).then(function(player){
        res.send(player);
    });
});

router.delete('/manutd/:id', function(req, res){
    res.send('delete it');
});

router.put('/manutd/:id', function(req, res){
    res.send('put it');
});

module.exports = router