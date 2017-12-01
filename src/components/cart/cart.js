angular.module("cart", [])
	.factory("cart", function() {
		var cartData = [];
		return {
			addProduct: function(id, name, price) {
				var addedToExistingItem = false;
				for(i = 0, len = cartData.length; i < len; i++) {
					if(cartData[i].id == id){
						cartData[i].count++;
						addedToExistingItem = true;
						break; 
					}
				}
				if(!addedToExistingItem) {
					cartData.push({
						count: 1,
						id: id,
						price: price,
						name: name
					});
				}
			},

			removeProduct: function(id) {
				for(var i = 0, len = cartData.length; i < len; i++) {
					if(id == cartData[i].id) {
						cartData.splice(i,i);
						break;
					}
				}
			},

			getProducts: function() {
				return cartData;
			}
		}
	})
	.directive("cartSummary", function(cart) {
		return {
			restrict: "E",
			templateUrl: "src/components/cart/cart-summary.html",
			controller: function($scope) {
				var cartData = cart.getProducts();
				$scope.total = function() {
					var total = 0;
					for(var i = 0, len = cartData.length; i < len; i++) {
						total += (cartData[i].price * cartData[i].count);
					}
					return total;
				}

				$scope.itemCount = function() {
					var total = 0;
					for(var i = 0, len = cartData.length; i < len; i++) {
						total += cartData[i].count;
					}
					return total;
				}
			}
		};
	});