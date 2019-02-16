const express = require('express');
var router = express.Router();
//import manutd schema
const manutd = require('../models/manutd');
const user = require('../models/user');

process.on('unhandledRejection', (reason, p) => {
  console.log('Unhandled Rejection at:', p, 'reason:', reason);
  // Application specific logging, throwing an error, or other logic here
});

//To check if user exist
function usercheck(name, apikey){
    return new Promise(function(resolve, reject){
        user.findOne({name: name}).then(function(euser){
            if( euser.apikey === apikey){
                resolve()
            }
        }).catch(function(error){
            reject('incorrect username or apikey')
        })
    });
};


router.get('/manutd', function(req, res){
    var name = req.headers.name;
    var apikey = req.headers.apikey;
    var promise =usercheck(name, apikey);
    promise.then(function(){
        var query = {};
        for(var key in req.query){
            //console.log(req.query[key]);
            req.query[key] !== "" ? query[key] = req.query[key] : null;
        }
        manutd.find(query).then(function(players){
            res.send(players);
        });
    }).catch(function(error){
        res.status(404).send({error: error});
    })

});

router.post('/manutd', function(req, res, next){
    var name = req.headers.name;
    var apikey = req.headers.apikey;
    var promise =usercheck(name, apikey);
    console.log(req.body);
    promise.then(function(){
        manutd.create(req.body).then(function(player){
            res.send(player);
        }).catch(next);
    }).catch(function(error){
        res.status(404).send({error: error});
    });
});

router.delete('/manutd/:id', function(req, res, next){
    var name = req.headers.name;
    var apikey = req.headers.apikey;
    var promise =usercheck(name, apikey);
    promise.then(function(){
        console.log(req.params.id);
        manutd.findByIdAndDelete({_id: req.params.id}).then(function(player){
            res.send(player);
        }).catch(next);    
    }).catch(function(error){
        res.status(404).send({error: error});
    });
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