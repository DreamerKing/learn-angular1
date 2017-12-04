angular.module("module.Services", [])
.service("days", function(now) {
	this.today = now.getDay();
	this.tomorrow = this.today + 1;
});