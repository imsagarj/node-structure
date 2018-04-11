
var express=require('express');
var bodyParser=require('body-parser');

var app=express();

 app.use(bodyParser.json());
 app.use(bodyParser.urlencoded({extended:false}));

app.get('/',function(req,res){
	res.send("Hello Sagar Jadhav");
});
app.listen(7000,function(err,res){
	console.log("Application run onn port"+" "+7000);
});
