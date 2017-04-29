angular.module('CardsAgainstAssembly')
	.directive('wdiCard',wdiCard);




function wdiCard(){
  var directive = {
    restrict: 'E', //look for an element
    replace: true,//swap out that element with the stuff we are giving it
    //looks for a file, just an html snippet would be template:
    templateUrl:  "templates/cardDirective.html",
    scope: {
    	//stores '@' in the 'question variable'
        wesleySnipes: '@'
    }
  };
  return directive;
}
// //will connect to <wdi-card> html
// function wdiCard(){
// 	var directive = {
// 		restrict:'E', //look for an element
// 		replace: true, //swap out that element with the stuff we are giving it
// 		//looks for a file, just an html snippet would be template:
// 		templateUrl: 'templates/cardDirective.html',
// 		scope:{
// 			//stores '@' in the 'question variable'
// 			wesley-Snipes:'@'
		
	
// 		}
// 	};
// 	return directive;
// }

// angular.module('CardsAgainstAssembly')
//   .directive('wdiCard', wdiCard);

// function wdiCard(){
//   var directive = {
//     //'A' == attribute, 'E' == element, 'C' == class
//     restrict: 'E',
//     replace: true,
//     templateUrl:  "templates/cardDirective.html",
//     scope: {
//         question: '@'
//     }
//   };

//   return directive;
// }
