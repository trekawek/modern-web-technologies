var express = require('express'),
    bodyParser = require('body-parser'),
    app = express();

if (process.env.REDISTOGO_URL) {
  var rtg   = require("url").parse(process.env.REDISTOGO_URL);
  var redis = require("redis").createClient(rtg.port, rtg.hostname);
  redis.auth(rtg.auth.split(":")[1]);
} else {
    var redis = require("redis").createClient();
}

app.set('port', (process.env.PORT || 3000));
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

var server = app.listen(app.get('port'), function() {
  console.log('Listening on port ' + app.get('port'));
});
