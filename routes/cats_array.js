var _ = require('lodash');

module.exports = function(app) {

    _cats = [];

    app.post('/cat', function(req, res){
        _cats.push(req.body);
        res.json({info: 'Cat save successfully'});
    });

    app.get('/cat', function(req, res){
        res.send(_cats);
    });

    app.put('/cat/:id', function(req, res){
        var index = _.findIndex(
            _cats,
            {
                name: req.params.id
            }
        );

        _.merge(_cats[index], req.body);
        res.json({info: 'Update successful'})
    });

    app.delete('/cat/:id', function(req, res){
        _.remove(_cats, function(cat){
            return cat.name === req.params.id;
        });

        res.json({info: 'Delete successful'})
    });

    //app.get('/', function (req, res) {
    //    res.send('hello cats 2');
    //});
};