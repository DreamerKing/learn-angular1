angular.module("sportsStore")
		.constant("dataUrl", "http://localhost:2403/products")
		.constant("orderUrl", "http://localhost:2403/orders")
		.controller("sportsStoreCtrl", function($scope, $http, $location,  cart, dataUrl, orderUrl) {
			$scope.data = {};
			$http.get(dataUrl)
				 .then(function(res) {
					$scope.data.products = res.data;
				 })
				 .catch(function(error) {
					$scope.data.error = error;
				}
			);

			$scope.sendOrder = function (shippingDetails) {
				var order = angular.copy(shippingDetails);
				order.products = cart.getProducts();
				$http.post(orderUrl, order)
					.then(function (data) {
						$scope.data.orderId = data.id;
						cart.getProducts().length = 0;
					})
					.catch(function(error) {
						$scope.data.orderError = error;
					})
					.finally(function() {
						$location.path("/complete");
					});

			}		
});	