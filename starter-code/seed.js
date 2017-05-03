var db =require('./models');
/// are all the cards in one object in the db?
var cardsArray = [
    {question: "What is Batman's guilty pleasure?"},
    {question: "I'm sorry professor, I couldn't complete my homework because _________."},
    {question: "I get by with a little help from _________."},
    {question: "_________. It's a trap!"},
    {question: "The class field trip was completely ruined by _________."},
    {question: "What's my secret power?"}
  ];

  db.Card.remove({}, function(err,cardsdb){
  	console.log('all cards removed');
  	db.Card.create(cardsArray, function(err, cardsdb){
      console.log(cardsdb);
  		if (err){
  			console.log(err);
  		}
  		console.log('added cards');
  		process.exit();
  	});
  });