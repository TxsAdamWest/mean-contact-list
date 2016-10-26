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

// Adding a scope function will give our dom elements 'mixin-like' functions
// that can be used globally.
$scope.addContact = function() {
	console.log($scope.contact);
	// Sends input data to server.  
	$http.post('/contactList', $scope.contact).success(function(response){
		console.log(response);
	});
}
	
}])