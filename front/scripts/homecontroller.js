app.controller("HomeController",function($scope,$state){
	$scope.$emit("changeTitle",$state.current.views.main.data.title);
	
	$scope.logindet = function()
	{
		console.log($scope.user);
	}
});
