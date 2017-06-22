app.controller('AdminController',['$scope','$http','$rootScope','$uibModal','$filter','$state','$cookies',function($scope,$http,$rootScope,$uibModal,$filter,$state,$cookies){
	
	$scope.$emit("changeTitle",$state.current.views.main.data.title);
	var cookietoken= $cookies.get('ashikToken');
	var cookierole= $cookies.get('userrole');
	if(cookierole == 1 && cookietoken)
	{	
		$rootScope.showloader = true;
		$http({
			method:"GET",
			url:$rootScope.apiend+'getproducts',
			headers:{'JWT-AuthToken':localStorage.token},
			// params:data,
		}).success(function(result){
			$rootScope.showloader=false;
			console.log(result);
			$scope.mydata = result;
			$scope.last = result['total'];
			console.log($scope.last);
		}).error(function(data){
			alert("something's wrong!");
		});

		$http({
			method:"GET",
			url:$rootScope.apiend+'getnumbers',
			headers:{'JWT-AuthToken':localStorage.token},
			// params:data,
		}).success(function(result){
			console.log(result);
			$scope.numbdata = result;
			
			console.log($scope.numbdata[0]);
		}).error(function(data){
			alert("something's wrong!");
		});

		  $scope.page = 1;
		  $scope.next = function(){
		  	
		    if($scope.last>10 && $scope.page < ($scope.last/10))
		    {
		    	$rootScope.showloader=true;
		      $scope.val1 = ($scope.page) * 10;
		      $scope.page++;
		      $scope.paginate($scope.val1);
		    }
		  }

		  $scope.prev = function(){

		    if($scope.page !== 1)
		    {
		    	$rootScope.showloader=true;
		      $scope.page--;
		      $scope.val2 = ($scope.page-1) * 10;
		      $scope.paginate($scope.val2);
		    }
		  }

		  $scope.paginate = function(x){

		    $http({
		      method:"GET",
		      url:$rootScope.apiend+'getproducts',
		      headers:{'JWT-AuthToken':localStorage.token},
		      params:{start:x}
		    }).success(function(result){
		    	$rootScope.showloader=false;
		      console.log(result);
		      $scope.last = result['total'];
		      console.log($scope.last);
		      $scope.mydata = result;
		    }).error(function(data){
		    	$rootScope.showloader=false;
		      alert("something's wrong!");
		    });
		  }



		$scope.details ={
	          // from:"",
	          // to:"",
	          status:"",
	          amount:""
	    };
		
		var self = this;
	    self.animationsEnabled = true;

	    self.open = function(dat){
	        console.log(dat);
	    	$scope.editable = dat;
	        var modalInstance = $uibModal.open({
	       	animation: self.animationsEnabled,
	        ariaLabelledBy: 'modal-title',
	        ariaDescribedBy: 'modal-body',
	        templateUrl: 'modal.html',
	       	controller: 'ModalController',
	        controllerAs: 'vm',
	        scope: $scope,

	        });
	    };

	    self.view = function(data){
	    	$scope.viewable = data;
	    	var modalInstance = $uibModal.open({
	       	animation: self.animationsEnabled,
	        ariaLabelledBy: 'modal-title',
	        ariaDescribedBy: 'modal-body',
	        templateUrl: 'view.html',
	       	controller: 'ModalController',
	        controllerAs: 'vm',
	        scope: $scope,

	        });
	    };

		$scope.data_before = [];
		$scope.today = new Date();

		// $scope.new = $scope.today.toString();
		// console.log($scope.new);

		var results = $filter('date')($scope.today, "yyyy-MM-dd");
		// console.log(results);

		// $scope.calculate = function(to)
		// {
			
		// 	// var somethingo= today.split(" ");
		// 	// console.log(somethingo);
			
		// 		alert(today);
		// 		console.log(today);
		// 	return $scope.differenceInDays($scope.today,to);
		// }

	    $scope.differenceInDays = function (firstDate,status) {
	        
	        var dt2 = firstDate.split('-'),
	            dt1 = results.split('-'),
	            one = new Date(dt1[0], dt1[1], dt1[2]),
	            two = new Date(dt2[0], dt2[1], dt2[2]);
	        
	        var millisecondsPerDay = 1000 * 60 * 60 * 24;
	        var millisBetween = two.getTime() - one.getTime();
	        var days = millisBetween / millisecondsPerDay;

	        $scope.timeleft = Math.floor(days);
	        if(status=="Pending"||status=="Rejected"||status=="Completed")
	        {	
	        	
	        	return "-";
	        }
	        else
	        {
	        	
	        	if($scope.timeleft > 0)
		        {
		        
		        	return "Completing in "+ $scope.timeleft +" days";
		        	
		        }
		        else if($scope.timeleft < 0)
		        {
		        
		        	return "Overdue By "+ Math.abs($scope.timeleft) +" days";
		        	
		        }
		        else
		        {
		        	
		        	return "Today is final day";
		        	
		        };
	        };

	    
	        // return $timeleft;      
	    };

	    $scope.statuscolor = function(sta)
		{
		    if(sta == "Completed")
		    {
		      return "bg bg-success";
		    }
		    else if(sta == "Pending"){
		      return "bg bg-warning";
		    }else if(sta == "Overdue"){
		      return "bg bg-danger";
		    }else if(sta == "Running"){
		      return "bg bg-info";
		    }else if(sta == "Rejected"){
		      return "bg bg-danger";
		    }
		}


	}	
	else{
		alert('You need to login as admin');
		$state.go('home');
	}

}])