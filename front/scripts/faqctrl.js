app.controller('faqctrl',['$scope','$state',function($scope,$state){
	$scope.$emit("changeTitle",$state.current.views.main.data.title); 
}]);