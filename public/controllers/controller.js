// myApp is the entire application that will be hosted on the server.
var myApp = angular.module('myApp', []);
myApp.controller('AppCtrl', ['$scope', '$http',function($scope,$http){

	console.log('Waddup from controller!');

var refresh = function(){
// This is essentially writing an API.  Here, I will define what actions are 
// taken once certain commands are requested.  
	$http.get('/contactList').success(function(response){
		console.log("I got the data I requested!");
		$scope.contactList = response;
	});
};

refresh();

// Adding a scope function will give our dom elements 'mixin-like' functions
// that can be used globally.
	$scope.addContact = function() {
		console.log($scope.contact);
		// Sends input data to server.  
		$http.post('/contactList', $scope.contact).success(function(response){
			console.log(response);
			refresh();
		});
	};

	$scope.remove = function(id) {
		console.log(id);
		$http.delete('/contactList/' + id).success(function(response){
			console.log(response, "1")
			refresh();
		});
	};

	$scope.edit = function(id) {
		console.log(id);
		$http.get('/contactList/' + id).success(function(response){
			$scope.contact = response;
		})
	};

	$scope.update = function() {
		console.log($scope.contact._id);
		$http.put('/contactList/' + $scope.contact._id, $scope.contact).success(function(response){
			refresh();
		});
	};

	$scope.deselect = function() {
		$scope.contact = "";
	};

}]);