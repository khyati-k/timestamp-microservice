'use strict';

//dependencies
var express = require('express');
var moment = require('moment');
var chrono = require('chrono-node');

//global config
var app = express();
var PORT = process.env.PORT || 3000;


app.get('/', function(req, res){
res.send('TIMESTAMP MICROSERVICE');
});

var o = { 'unix': null,
			'natural': null };
var a, date;			
app.get('/:id',function(req, res){

 
a  = chrono.parseDate(req.params.id);
//console.log('natural');
	if(a){
	o.unix = moment(a).format("X") ;
	o.natural = moment(a).format("MMMM Do, YYYY");
}
else if(Number(req.params.id))
{//console.log('unix');
	o.unix = req.params.id;
	o.natural = moment.unix(req.params.id).format("MMMM Do, YYYY");
}
res.send(o);
});

app.listen(PORT,function(){
	console.log('Server is running');
});