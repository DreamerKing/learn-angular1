angular.module("sportsStore")
		.constant("dataUrl", "http://localhost:2403/products")
		.controller("sportsStoreCtrl", function($scope, $http, dataUrl) {
			$scope.data = {};
			$http.get(dataUrl)
				 .then(function(res) {
					$scope.data.products = res.data;
				 })
				 .catch(function(error) {
					$scope.data.error = error;
				}
			);	
});	