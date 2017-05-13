angular.module('CardsAgainstAssembly')
  .directive('card', wdiCard);

  function wdiCard(){
 
    var directive = {
     
      restrict: 'E',
      // if it replaces an HTML element 
      replace: true,
      // template or file for template to build html
      // templateUrl: 'templates/cardDirective.html',
      templateUrl: "templates/cardDirective.html",
      // scope for directive
      scope: {
        
        question: '@' // stores templateUrl in 'question' ATTRIBUTE

      }

    };
     return directive;
  }
