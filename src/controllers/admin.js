angular.module("sportsStoreAdmin")
		.constant("authUrl", "http://localhost:2403/users")
		.constant("orderUrl", "http://localhost:2403/orders")
		.controller("authCtrl", function($scope, $http, $location, authUrl) {
			$scope.authenticate = function (user, pass) {
				console.log(user,pass,"sddfsf");
				$http.post(authUrl, {
					name: user,
					password: pass
				},{
					withCredentials: true
				}).then(function(data) {
					$location.path("/main");
				}).catch(function(error) {
					$scope.authenticationError = error;
				});
			}
		})
		.controller("mainCtrl", function($scope) {
			$scope.screens = ["Products", "Orders"];
			$scope.current = $scope.screens[0];

			$scope.setScreen = function(index) {
				$scope.current = $scope.screens[index];
			}

			$scope.getScreen = function(){
				return $scope.current == "Products" ? 
					"/src/views/admin-products.html" : "src/views/admin-orders.html";
			};
		})
		.controller("ordersCtrl", function($scope, $http, orderUrl) {
			$http.get(orderUrl, { withCredentials: true})
				.then(function(res) {
					$scope.orders = res.data;
				})
				.catch(function(error) {
					$scope.error = error;
				});
			$scope.selectedOrder;
			
			$scope.selectOrder = function(order) {
				console.log(order,"asdssd");
				$scope.selectedOrder = order;
			}	

			$scope.calcTotal = function(order) {
				console.log(order,"calcTotal");
				var total = 0;
				for(var i =0, len = order.products.length; i < len; i++ ) {
					total += order.products[i].count * order.products[i].price;
				}
				return total;
			}
		});
