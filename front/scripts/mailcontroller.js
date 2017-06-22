app.controller('mailctrl',['$scope','$http','$state','$rootScope',function($scope,$http,$state,$rootScope){
	$scope.$emit("changeTitle",$state.current.views.main.data.title); 
	$scope.mail = {
		user:"",
		email:"",
		subject:"",
		body:""
	}
	$scope.ret_msg="assssssssssss";

	$scope.send = function(){
		// alert('hello');
		$http({
			method:"POST",
			url:$rootScope.apiend+'contactemail',
			data:$scope.mail
		}).success(function(result){
			$scope.ret_msg = result;
		
		}).error(function(result){
			
			$scope.err_msg = 'Something is wrong! Please try again later.';
		});
	}
}]);