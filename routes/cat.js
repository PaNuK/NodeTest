var _ = require('lodash');
var Cat = require('./../models/cat.js');

module.exports = function(app) {

    _cats = [];

    app.post('/cat', function(req, res){
        var newCat = new Cat(req.body);
        newCat.save(function(err){
            if(err){
                res.json({info: 'error during cat create', error: err});
            }
            res.json({info: 'Cat save successfully'});
        });

    });

    app.get('/cat', function(req, res){
        Cat.find(function(err, cats){
            if(err){
                res.json({info: 'error during find cats', error: err});
            }
            res.json({info: 'Cats found successfully', data: cats});

        });
    });

    app.put('/cat/:id', function(req, res){
        Cat.findById(req.params.id, function(err, cat){
            if(err){
                res.json({info: 'error during cat update', error: err});
            }
            if(cat){
                _.merge(cat, req.body);
                cat.save(function(err){
                    if(err){
                        res.json({info: 'error during cat create', error: err});
                    }
                    res.json({info: 'Cat save successfully'});
                });
            }else{
                res.json({info: 'Cat not found'});
            }
        });
    });

    app.put('/cat/:id', function(req, res){
        Cat.findById(req.params.id, function(err, cat){
            if(err){
                res.json({info: 'error during cat update', error: err});
            }
            if(cat){
                res.json({info: 'cat found', data: cat});
            }else{
                res.json({info: 'Cat not found'});
            }
        });
    });

    app.delete('/cat/:id', function(req, res){
        Cat.findByIdAndRemove(req.params.id, function(err, cat){
            if(err){
                res.json({info: 'error during  remove cat', error: err});
            }
            res.json({info: 'cat succesfuly removed'});
        });
    });

    //app.get('/', function (req, res) {
    //    res.send('hello cats 2');
    //});
};