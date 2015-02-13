var express = require('express'),
    bodyParser = require('body-parser'),
    app = express();

app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json());

var tasks = [];
app.get('/api/todo', function(req, res) {
    res.json(tasks);
});

app.post('/api/todo', function(req, res) {
    tasks = req.body;
    res.end();
});

var server = app.listen(3000, function() {
  console.log('Listening on port 3000');
});