angular.module('CardsAgainstAssembly')
  .controller('CardsController', CardsController);



CardsController.$inject = ['$http'];

function CardsController($http){
  console.log('CardsController twerkin');
  var self = this;
  self.all = [];
  self.newCard  = {};
  self.getCards = getCards;

  function getCards(){
    $http
    .get('http://localhost:3000/cards')
    .then(function(res){
      
      self.all = res.data;
      
    });
  }

getCards();
//get all the cards store it in the array above

  function postCard(){
    $http
    .post('http://localhost:3000', self.newCard)
    .then(function(res){
      console.log(self.newcard);
      self.newCard = {};
    });
  }

}


