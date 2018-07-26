

var express=require('express');
var app=express();
app.use(express.static(__dirname));  /*відображення статичного контенту*/

var bodyParser=require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

var fs=require('fs');

app.get('/', function(req, res) {
	res.sendFile(__dirname+'/index.html')
});




app.listen(process.env.PORT || 8080);
console.log('Server run');
