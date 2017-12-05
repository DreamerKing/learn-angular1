var controllersModule = angular.module("moduleModule.Controllers", []);
controllersModule.controller("moduleCtrl", function($scope) {
	$scope.data = {
		cities: ["London","New York", "Paris"],
		totalClicks: 0
	};

	$scope.$watch('data.totalClicks', function(newValue) {
		// console.log("Total totalClicks ", newValue)
	}); 
});

controllersModule.controller("dayCtrl", function($scope, days) {
	$scope.day = days.today;
});

controllersModule.controller("tomCtrl", function($scope, days) {
	$scope.day = days.tomorrow;
});	