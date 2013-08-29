var express = require('express');
var http = require('http');

var app = express();


// all environments
app.set('port', process.env.PORT || 3000);
app.use(express.bodyParser());


app.get('/', function(request, response) {

	response.send('¡Hola, Express!');

});


// app.get('/users/:userName', function(request, response) {

// 	var name = request.params.userName;

// 	response.send('¡Hola, ' + name + '!');

// });


app.post('/users', function(request, response) {

	var username = request.body.username;

	response.send('¡Hola, ' + username + '!');

});


app.get(/\/personal\/(\d*)\/?(edit)?/, function (request, response) {

	var message = 'el perfil del empleado #' + request.params[0];

	if (request.params[1] === 'edit') {

		message = 'Editando ' + message;

	} else {

		message = 'Viendo ' + message;

	}

	response.send(message);

});


http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});