

var express = require('express');
var app = express();
var router = express.Router();
var bodyParser = require('body-parser');
var port = process.envPORT || 3000;
var db = require('./models');
// var cardRouter = require('./cardRouter');


app.use(bodyParser.urlencoded({extended:true}));//we use express to parse url query strings that come in as requests
app.use(bodyParser.json());

//set up express to serve up files from public directory

app.use(express.static('public'));

// http://localhost:3000/ is index.html
app.get('/', function(req,res){
	res.sendFile(__dirname + "/views/index.html");
});
/////////////  GET
app.get('/cards', function index(req,res){
	db.Card.find({}, function(err, cards){
		res.json(cards);
	});
});
/////////////  GET one
app.get('/cards/:id', function show(req,res){
	console.log(req.body);
	db.Card.findOne({_id:req.params.id},function(err,dbcard){
		if(err){
			console.log(err);
		} res.json(dbcard);
	});
});
/////////////  Post
app.post('/cards', function post(req,res){
	console.log(req.body);
	var post = new db.Card({
		question: req.body.question
	});
	post.save(function(err,card){
		res.json(card);
	});

});
/////////////  Delete
app.delete('/cards/:id', function(req,res){
	db.Card.findOneAndRemove({_id:req.params.id}, function(err,dbcard){
		res.json('just removed '+dbcard);
	});
});
/////////////  GET
app.listen(port, function(){
	console.log('server started on port', port);
	console.log('http://localhost:'+port);
});


