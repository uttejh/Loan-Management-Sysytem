app.controller('EditProCtrl',['$scope','$http','$rootScope','$state','$cookies',function($scope,$http,$rootScope,$state,$cookies){
	$scope.$emit("changeTitle",$state.current.views.main.data.title);
	// $scope.title="Home";
	var cookietoken= $cookies.get('ashikToken');
	$rootScope.showloader=true;
	$scope.comp=false;

	if(cookietoken)
	{
		$http({
			method:"GET",
			url:$rootScope.apiend+'getuserdata',
			headers:{'JWT-AuthToken':localStorage.token},	
		}).success(function(result){
			$rootScope.showloader=false;
			$scope.details = result;
			console.log($scope.details);
		}).error(function(result){
				
			// $scope.err_msg = 'Something is wrong! Please try again later.';
		});
		var reg_array = [];
		$scope.save = function(){
			$rootScope.showloader=true;
			$http({
				method:"POST",
				url:$rootScope.apiend+'saveuserdata',
				headers:{'JWT-AuthToken':localStorage.token},
				data:{username:$scope.details.username,email:$scope.details.email,phone:$scope.details.phone,password:$scope.password,conpassword:$scope.confirmpassword}	
			}).success(function(result){
				$rootScope.showloader=false;
				console.log(result);
				$scope.comp = true;
				$scope.myres = result;
				reg_array.length = 0;
				
			}).error(function(result){
				$rootScope.showloader=false;
				$scope.comp = false;
				reg_array.length = 0;
				angular.forEach(result, function(value, key) {
				  // console.log(key + ': ' + value);

					reg_array.push('' + value);
					$scope.errors = reg_array;
				});
			});
		}
	}
	else
	{
		$state.go('login_register');
	}
}]);