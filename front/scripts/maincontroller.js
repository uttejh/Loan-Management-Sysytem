app.controller('MainController',['$rootScope','$scope','$state','$cookies','$http',function($rootScope,$scope,$state,$cookies,$http){
	$rootScope.apiend = 'http://localhost:8012/uttejh/ashik/back/public/';
	$rootScope.showloader=false;
	// $scope.title="Home";
	// $scope.$emit("changeTitle",$state.current.views.main.data.title);
	$scope.$on("changeTitle",function(event,data){
		$scope.title=data;
	});
	$scope.isState = function(states){
		return $state.includes(states);
    };

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

	var cookietoken1= $cookies.get('ashikToken');
	$rootScope.userprofilename = $cookies.get('userproname');
	// $rootScope.showit = false;
	if(cookietoken1)
	{
		$rootScope.isLoggedIn = true;
	}
	else
	{
		$rootScope.isLoggedIn = false;
	}

	$scope.logout = function(){
		$rootScope.showloader=true;
		$rootScope.isLoggedIn = false;
		localStorage.removeItem('token');
		$cookies.remove('ashikToken');
		$cookies.remove('userproname');
		$cookies.remove('userrole');
		$rootScope.showloader=false;
		$state.go('home');
	}

	$scope.user={
			username:"",
			logpassword:"",
			rememberme:""
	};
	$scope.showerror=false;
	// $scope.isLoggedIn = false;
		
		$scope.login = function(){
			$rootScope.showloader=true;
			$http({
				method:"POST",
				url:$rootScope.apiend+'login',
				data:$scope.user
			})
			.success(function(result)
			{
				// console.log(result);
				
				// $state.go('home');

				if(result['statusCode']=='202')
				{	
					if($scope.user.rememberme)
					{
						var expireDate = new Date();
	  					expireDate.setDate(expireDate.getDate() + 30);
						$cookies.put('ashikToken', result['message'],{'expires': expireDate});
						$cookies.put('userproname',result['username'],{'expires': expireDate});

					}
					else
					{
						$cookies.put('ashikToken', result['message']);
						$cookies.put('userproname',result['username']);
						
					}
					localStorage.token=result['message'];
					

					// console.log($rootScope.userprofilename);

					$rootScope.isLoggedIn = true; 
      				// $scope.isLoggedIn = loginSvc.isLoggedIn;
      				$cookies.put('userrole',result['userrole']);
      				$rootScope.userprofilename = $cookies.get('userproname');
      				$rootScope.showloader=false;
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
					$rootScope.showloader=false;
					$scope.error_msg=result['message'];
					$scope.showerror=true;
				}
			})
			.error(function(data){
				alert('something looks wrong.');
				
			});
		};

		
		$scope.registers = function(){

			$rootScope.showloader=true;
			$http({
				method:"POST",
				url:$rootScope.apiend+'register',
				data: $scope.register
			})
			.success(function(result){
				// console.log(result);
				localStorage.token=result[1];
				$cookies.put('ashikToken', result[1]);
				$cookies.put('userproname',result[2]);
				$cookies.put('userrole',2);
				$rootScope.showloader=false;
				// console.log(result);
				$state.go('home');

			})
			.error(function(result)
			{
				$rootScope.showloader=false;
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
			$rootScope.showloader=true;
			$http({
				method:"POST",
				url:$rootScope.apiend+'sendforgpwdmail',
				data:$scope.forgot
			})
			.success(function(result){
				$rootScope.showloader=false;
				console.log(result);
			}).error(function(data){
				$rootScope.showloader=false;
				alert('something is wrong!');
			});
		}

		$scope.reqrep = function(){
			$rootScope.showloader=true;
			$http({
				method:"GET",
				url:$rootScope.apiend+'sendrep',
				headers:{'JWT-AuthToken':localStorage.token},
			})
			.success(function(result){
				$rootScope.showloader=false;
				console.log(result);
			}).error(function(data){
				$rootScope.showloader=false;
				alert('something is wrong!');
			});
		}







}]);

// app.factory('loginSvc',[function(){
//   var loginProperties ={
//     isLoggedIn: false,
//   };
//   return loginProperties;
  
// }]);