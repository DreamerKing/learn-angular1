angular.module("moduleModule.Directives", [])
.directive("triBtn", function() {
	return {
		scope: { 
			counter: "=counter"
		},
		link: function(scope, element, attrs) {
			element.on("click", function(event) {
				console.log("Button click: ", event.target.innerText);
				scope.$apply(function() {
					scope.counter++;
				});
			});
		}
	}
})
.directive("highlight", function($filter) {
	var dayFilter = $filter("dayName");
	return function(scope, element, attrs) {
		if(dayFilter(scope.day) == attrs["highlight"]) {
			element.css("color", "red");
		}
	}
});