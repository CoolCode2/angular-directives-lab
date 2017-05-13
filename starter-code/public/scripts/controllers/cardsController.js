angular.module('CardsAgainstAssembly')
  // .controller('PostCard', PostCard)
  .controller('CardsController', CardsController);



CardsController.$inject = ['$http'];
function CardsController($http){
  console.log('CardsController twerkin');
  var self = this;
  self.all = [];
  self.newCard  = {};
  self.getCards = getCards;
  self.PostCard = PostCard;
  self.removeCard = removeCard;



  function getCards(){
    $http
    .get('http://localhost:3000/cards')
    .then(function(res){
      
      self.all = res.data;
      console.log("getcards function");
    });
  }

  getCards();
//get all the cards store it in the array above

function removeCard(card){
  console.log('1 _id = '+card._id);
  $http
    .delete('http://localhost:3000/cards/'+card._id)
    .then(function(res){
      
      console.log('3 self.all.indexOf: '+self.all.indexOf);
      var cardPlace = self.all.indexOf(card);
      console.log('cardPlace ='+cardPlace);
      self.all.splice(cardPlace,1);
      console.log('4 card removed');
    });
}

function PostCard(){
    console.log('posting a card');
    $http
    .post('http://localhost:3000/cards', self.newCard)
    .then(function(res){
      console.log(res.data);
      getCards();
    });
    self.newCard = {};
  }
  // function resetCards(){
  //   self.all = [];
  //   console.log(self.all);
  //   getCards();
  // }
}
// PostCard.$inject = ['$http'];
// function PostCard($http){
    
//     $http
//     .post('http://localhost:3000/cards', self.newCard)
//     .then(function(res){
//       console.log(res.data);
//       self.newCard = {};
//         resetCards();
//     });

//   }
//   function resetCards(){
//     self.all = [];
//     console.log(self.all);
//     getCards();
//   }


