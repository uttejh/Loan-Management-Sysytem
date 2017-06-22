app.controller('ProductController',['$scope','$http','$rootScope','$state','$cookies',function($scope,$http,$rootScope,$state,$cookies){
	$scope.$emit("changeTitle",$state.current.views.main.data.title);

	var cookietoken= $cookies.get('ashikToken');
	if(cookietoken)
	{
		$scope.stepsModel = [];
		$scope.imageIsLoaded = function(e){
	        $scope.$apply(function() {
	        	$scope.stepsModel.length = 0;
	            $scope.stepsModel.push(e.target.result);
	        });
	    }
	    $scope.imageUpload = function(element){
	        var reader = new FileReader();
	        reader.onload = $scope.imageIsLoaded;
	        reader.readAsDataURL(element.files[0]);
	    }


		$scope.post = function(dat){

			var formdata = new FormData();
			formdata.append('file', dat.filedat);
			formdata.append('year',dat.year);
			formdata.append('type',dat.type);
			formdata.append('tenure',dat.tenure);
			formdata.append('desc',dat.desc);
			formdata.append('other',dat.other);
			formdata.append('model',dat.model);
			formdata.append('exp',dat.exp);

			console.log(dat);
			
			$http({
				method:"POST",
				url:$rootScope.apiend+'uploadpost',
				data:formdata,
				transformRequest: angular.identity,
				headers: {
					'Content-Type': undefined,
					'JWT-AuthToken':localStorage.token
				}
			}).success(function(result){
				console.log(result);
				$state.go('transactions');
			}).error(function(data){
				// alert("something's wrong!");
			})
		};
	}
	else{
		$state.go('login_register');
	}
}]);