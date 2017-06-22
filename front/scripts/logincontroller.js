app.controller('loginctrl',['$scope','$rootScope','$http','$state','$cookies',function($scope,$rootScope,$http,$state,$cookies){
//,CSRF_TOKEN
	$scope.$emit("changeTitle",$state.current.views.main.data.title);

	var cookietoken= $cookies.get('ashikToken');
	// var data = {'_token':CSRF_TOKEN};

	if(cookietoken)
	{
		alert('You are already logged in!');
		$state.go('home');
	}
	else
	{
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


		$scope.forgot={
			username:"",
			email:""
		}
		$scope.sendmail = function(){
			$http({
				method:"POST",
				url:$rootScope.apiend+'sendforgpwdmail',
				data:$scope.forgot
			})
			.success(function(result){
				console.log(result);
			}).error(function(data){
				alert('something is wrong!');
			});
		}

		$scope.reqrep = function(){
			$http({
				method:"GET",
				url:$rootScope.apiend+'sendrep',
				headers:{'JWT-AuthToken':localStorage.token},
			})
			.success(function(result){
				console.log(result);
			}).error(function(data){
				alert('something is wrong!');
			});
		}



		$scope.user={
			username:"",
			password:"",
			rememberme:""
		};
		$scope.showerror=false;
		// $scope.isLoggedIn = false;
		
		$scope.login = function(){

			$http({
				method:"POST",
				url:$rootScope.apiend+'login',
				data:$scope.user
			})
			.success(function(result){
				// console.log(result);
				
				// $state.go('home');
				if(result['statusCode']=='202')
				{	
					if($scope.user.rememberme)
					{
						var expireDate = new Date();
	  					expireDate.setDate(expireDate.getDate() + 30);
						$cookies.put('ashikToken', result['message'],{'expires': expireDate});
					}
					else
					{
						$cookies.put('ashikToken', result['message']);
					}
					localStorage.token=result['message'];
					$rootScope.userprofilename = result['username'];
					console.log($rootScope.userprofilename);

					$rootScope.isLoggedIn = true; 
      				// $scope.isLoggedIn = loginSvc.isLoggedIn;

					if(result['userrole']=='1')
					{

						$state.go('dashboard');
					}
					else if(result['userrole']=='2')
					{
						$state.go('home');
					}
				}
				else
				{
					$scope.error_msg=result['message'];
					$scope.showerror=true;
				}
			})
			.error(function(data){
				alert('something looks wrong.');
				alert(data);
			});
		};

		$scope.logout = function(){
	      $scope.isLoggedIn = false;
	      loginSvc.isLoggedIn = $scope.isLoggedIn;
	    }
	}
	
}]);