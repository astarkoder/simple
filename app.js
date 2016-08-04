var express = require('express');
var app = express();

app.set('port', process.env.PORT || 3030);

app.get('/', function(req, res) {
	res.send('Hello world');
});

app.listen(app.get('port'), function() {
	console.log('Server listening on port %d', app.get('port'));
});