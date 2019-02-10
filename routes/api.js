const express = require('express');
var router = express.Router();

router.get('/api', function(req, res){
    res.send('got it');
});

router.post('/api', function(req, res){
    res.send('post it');
});

router.delete('/api/:id', function(req, res){
    res.send('delete it');
});

router.put('/api/:id', function(req, res){
    res.send('put it');
});

module.exports = router