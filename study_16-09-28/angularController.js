
var app=angular.module("myApp", []);
app.controller("myCtrl", function($scope){
	$scope.firstName="Tom";
	$scope.lastName="Kelusi";
	$scope.fullName=function(){
		return $scope.firstName+" "+$scope.lastName
	}
});