const express = require('express');
var router = express.Router();
//import manutd schema
const manutd = require('../models/manutd');

router.get('/manutd', function(req, res){
        var query = {};
        for(var key in req.query){
            console.log(req.query[key]);
            req.query[key] !== "" ? query[key] = req.query[key] : null;
        }
        console.log(query);
        manutd.find(query).then(function(players){
            res.send(players);
        });
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