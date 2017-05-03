var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/cardsAgainst');

module.exports.Card = require('./card.js');