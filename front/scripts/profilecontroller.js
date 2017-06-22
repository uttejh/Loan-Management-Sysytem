app.controller('profilecontroller',['$scope','$http','$rootScope','TimeLeft','$state','$cookies',function($scope,$http,$rootScope,TimeLeft,$state,$cookies){
  var cookietoken= $cookies.get('ashikToken'); 
  $scope.$emit("changeTitle",$state.current.views.main.data.title); 

  if(cookietoken)
  {
    $rootScope.showloader=true;
    $scope.alertshow=false;
    $scope.showempty = false;
    // $scope.token = JSON.stringify(localStorage.token); 
    // console.log($scope.token);
    $http({
      method:"GET",
      url:$rootScope.apiend+'getusertransactions',
      headers:{'JWT-AuthToken':localStorage.token},
    }).success(function(result){
      $rootScope.showloader=false;
      console.log(result);
      $scope.userdata = result;
      $scope.last = result['total'];
      if($scope.last==0)
      {
        $scope.showempty = true;
      }
    }).error(function(data){
      alert("something's wrong!");
    });
  // $scope.answer = TimeLeft.func();

    $scope.getdiff = function(value,status){
      var answers = TimeLeft.differenceInDays(value,status);
      return answers;
    };

    $scope.iscomp = function(sta){
      if(sta == "Completed")
      {
        return false;
      }
      else
      {
        return true;
      }
    }

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

    // ---------------------------------------------pagination----------------------------------------------------

    // $scope.value = 1;
    // $scope.activeMenu=1;

    // $scope.button_clicked = true;
    // $scope.myClass='disabled';
    // $scope.show=1;



    // $scope.decrement= function(){
      
    //   $scope.activeMenu--;
            
    //   if($scope.activeMenu>=3)
    //   {
    //     $scope.value--;
    //   }

    //   $scope.paginate($scope.value);
    //   if($scope.activeMenu==1)
    //   {
    //     $scope.button_clicked = true;
    //     $scope.myClass = [];
    //       $scope.myClass.push('disabled');  
    //     return false;
    //   }
      
    // };
    // $scope.increment= function(x){
    //   if($scope.myClass.indexOf('disabled') !== -1) {
    //         $scope.myClass = [];
    //     $scope.myClass.pop('disabled');
    //       }
    //       $scope.activeMenu++;

    //   if($scope.activeMenu>3)
    //   {
    //     $scope.value++;
    //   } 
      
      
    //   console.log($scope.activeMenu);
      
    //   $scope.paginate($scope.value);
    //   if($scope.activeMenu>1)
    //   {
    //     $scope.button_clicked = false;
    //     return true;
    //   }
    // };

    // $scope.paginate = function(starting){
    //   $scope.start = (starting-1)*10;
    //   $scope.end = $scope.start + 9;
    //   // alert($scope.start);
    //   console.log($scope.start,$scope.end );
    //   // $scope.activeMenu = starting;
    //   // console.log($scope.activeMenu);
    //   $http({
    //     method:"GET",
    //     url:$rootScope.apiend+'getusertransactions',
    //     headers:{'JWT-AuthToken':localStorage.token},
    //     params:{start:$scope.start}
    //   }).success(function(result){
    //     console.log(result);
    //     $scope.userdata = result;
    //   }).error(function(data){
    //     alert("something's wrong!");
    //   });
    //   };

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
        url:$rootScope.apiend+'getusertransactions',
        headers:{'JWT-AuthToken':localStorage.token},
        params:{start:x}
      }).success(function(result){
        $rootScope.showloader=false;
        console.log(result);
        $scope.last = result['total'];
        console.log($scope.last);
        $scope.userdata = result;
      }).error(function(data){
        alert("something's wrong!");
      });
    }

  //---------------------------------------------------------------------------------









    $scope.alert= function(){
     
      $('#myModal').modal('hide');
       $scope.alertshow=true;
      $scope.alerts = [
      // { type: 'danger', msg: 'Oh snap! There might be a technical problem.please try submitting again later.' },
      { type: 'success', msg: 'Thank you! Check your mail for the details.' }
      ];
    }
  }
  else
  {
    
    $state.go('login_register');
  }
}]);