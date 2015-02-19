var express = require('express'),
    bodyParser = require('body-parser'),
    app = express();

var redis = require('redis').createClient();

app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json());

app.get('/api/todo', function(req, res) {
    redis.get('todo', function(err, reply) {
        res.json(JSON.parse(reply) || []);
    });
});

app.post('/api/todo', function(req, res) {
    redis.set('todo', JSON.stringify(req.body));
    res.end();
});

var server = app.listen(3000, function() {
  console.log('Listening on port 3000');
});