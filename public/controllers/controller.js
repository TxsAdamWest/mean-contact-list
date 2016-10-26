// myApp is the entire application that will be hosted on the server.
var myApp = angular.module('myApp', []);
myApp.controller('AppCtrl', ['$scope', '$http',function($scope,$http){
	console.log('Waddup from controller!');

// This is essentially writing an API.  Here, I will define what actions are 
// taken once certain commands are requested.  
$http.get('/contactList').success(function(response){
	console.log("I got the data I requested!");
	$scope.contactList = response;
});

	
}])