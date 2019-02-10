const express = require('express');
var router = express.Router();
//import manutd schema
const manutd = require('../models/manutd');

router.get('/manutd', function(req, res){
    res.send('got it');
});

router.post('/manutd', function(req, res, next){
    console.log(req.body);
    manutd.create(req.body).then(function(player){
        res.send(player);
    }).catch(next);
});

router.delete('/manutd/:id', function(req, res, next){
    console.log(req.params.id);
    manutd.findByIdAndDelete({_id: req.params.id}).then(function(player){
        res.send(player);
    }).catch(next);
})

router.put('/manutd/:id', function(req, res, next){
    console.log(req.params.id);
    manutd.findByIdAndUpdate({_id: req.params.id}, req.body).then(function(){
        manutd.findOne({_id: req.params.id}).then(function(player){
            res.send(player);
        });
    });    
});

module.exports = router