var express = require('express');
var app = express();
var bodyParser = require('body-parser')
var fs = require('fs');
var staticAssets = __dirname + '/'
var jsonParser = bodyParser.json()

var port = process.env.PORT || portnumber;
app
	.use(function(req, res, next){
		console.log(req.url);
		next()

	})
	.use(express.static(staticAssets))
	.use(function(req, res, next){
		console.log('second: ' + req.url);
		next()

	})

	.use (bodyParser.urlencoded({
    extended: true
	}))

	.use(jsonParser)

	.get('/', function(request, response) {
			fs.readFile('index.html', function (err, data){
				response.setHeader("Content-Type", "text/html");
				response.send(data)
			})
		})

	.post('/sendmail',  function(request, response) {	
		console.log('yes');
		var obj = request.body
		console.log(obj)
		var api_key = 'key-personalkey';
		var domain = 'domain.mailgun.org';
		var mailgun = require('mailgun-js')({apiKey: api_key, domain: domain});
		 
		var data = {
		  from: 'AriasDavis.com <smptserver>',
		  to: 'mypersonalemailaddress.com',
		  subject: 'Hello',
		  text: "From " + request.body.name +  " " + request.body.email  + ", phone number " + request.body.phone + ", " + request.body.message 
		};
		 
		mailgun.messages().send(data, function (error, body) {
		  console.log(body);
		  response.send("Email Sent")
		});
	})

app.listen(port);
console.log('now listening on' + port);