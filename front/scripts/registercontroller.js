app.controller('registerctrl',['$rootScope','$scope','$http','$state',function($scope,$rootScope,$http,$state){
	$scope.register = {
		username:"",
		password:"",
		passwordConfirmation:"",
		email:"",
		phone:""
	};
	$scope.showerror2=false;
	// $scope.array =[];
	var reg_array = [];

	$scope.registers = function(){
		$http({
			method:"POST",
			url:$rootScope.apiend+'register',
			data: $scope.register
		})
		.success(function(result){
			console.log(result);
			localStorage.token=result['message'];
			$state.go('home');
		})
		.error(function(result){
		
			reg_array.length = 0;
			angular.forEach(result, function(value, key) {
			  // console.log(key + ': ' + value);

			  reg_array.push('' + value);
			  $scope.errors = reg_array;
			});
		});
	};
}]);

