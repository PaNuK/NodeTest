var _ = require('lodash');
var Dog = require('./../models/dog.js');

module.exports = function(app) {

    _dogs = [];

    app.post('/dog', function(req, res){
        var newDog = new Dog(req.body);
        newDog.save(function(err){
            if(err){
                res.json({info: 'error during dog create', error: err});
            }
            res.json({info: 'Dog save successfully'});
        });

    });

    app.get('/dog', function(req, res){
        Dog.find(function(err, dogs){
            if(err){
                res.json({info: 'error during find dogs', error: err});
            }
            res.json({info: 'Dogs found successfully', data: dogs});

        });
    });

    app.put('/dog/:id', function(req, res){
        Dog.findById(req.params.id, function(err, dog){
            if(err){
                res.json({info: 'error during dog update', error: err});
            }
            if(dog){
                _.merge(dog, req.body);
                dog.save(function(err){
                    if(err){
                        res.json({info: 'error during dog create', error: err});
                    }
                    res.json({info: 'Dog save successfully'});
                });
            }else{
                res.json({info: 'Dog not found'});
            }
        });
    });

    app.put('/dog/:id', function(req, res){
        Dog.findById(req.params.id, function(err, dog){
            if(err){
                res.json({info: 'error during dog update', error: err});
            }
            if(dog){
                res.json({info: 'dog found', data: dog});
            }else{
                res.json({info: 'Dog not found'});
            }
        });
    });

    app.delete('/dog/:id', function(req, res){
        Dog.findByIdAndRemove(req.params.id, function(err, dog){
            if(err){
                res.json({info: 'error during  remove dog', error: err});
            }
            res.json({info: 'dog succesfuly removed'});
        });
    });

    //app.get('/', function (req, res) {
    //    res.send('hello dogs 2');
    //});
};