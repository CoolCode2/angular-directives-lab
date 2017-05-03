var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var CardSchema = new Schema({
	question: String
});

var Card = mongoose.model('Card', CardSchema);

module.exports = Card;
console.log('Card exported');

