angular.module("moduleModule.Filters", [])
.filter("dayName", function() {
	var dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
	return function(input) {
		return angular.isNumber(input) ? dayNames[input] : input;
	};
});