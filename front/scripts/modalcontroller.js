app.controller('ModalController', ['$scope', '$uibModalInstance', '$uibModal', '$state','$http','$rootScope',function($scope, $uibModalInstance, $uibModal, $state,$http,$rootScope) {
        var self = this;
        self.cancel = function(){
            $uibModalInstance.dismiss();
        };

        // self.setvalue = function(){
          
        //   $http({
        //     method:"POST",
        //     url:$rootScope.apiend+'setdetails',
        //     data:{details:$scope.details,itemid:$scope.editable.commodityid,from:$scope.dt,to:$scope.dt1}
        //   }).success(function(result){
        //     console.log(result);
        //     // $scope.mydata = result;
        //     $scope.succmsg = true;
        //     $scope.msg=result;
        //     $scope.details = null;
        //   }).error(function(data){
        //       alert("something's wrong!");
        //   });
        // console.log($scope.details);
        // };
        
        // $scope.succmsg = true;
          // $http({
          //   method:"GET",
          //   url:$rootScope.apiend+'getdet',
          //   // data:{details1:$scope.details.status,details2:$scope.details.amount,id:$scope.editable.commodityid,from:$scope.dt,to:$scope.dt1},
          //   headers:{'JWT-AuthToken':localStorage.token},
          // }).success(function(result){
          //   console.log(result);
          //   // $scope.succmsg = true;
          //   // $scope.msg=result;
          //   // $scope.details = null;
          //   // $scope.mydata = result;
          // }).error(function(data){
          //     alert("something's wrong!");
          // });

        self.update = function(){
          $http({
            method:"POST",
            url:$rootScope.apiend+'updatedetails',
            data:{details1:$scope.details.status,details2:$scope.details.amount,id:$scope.editable.commodityid,from:$scope.dt,to:$scope.dt1},
            headers:{'JWT-AuthToken':localStorage.token},
          }).success(function(result){
            console.log(result);
            $scope.succmsg = true;
            $scope.msg=result;
            $scope.details = null;
            // $scope.mydata = result;
          }).error(function(data){
              alert("something's wrong!");
          });
        };





          $scope.today = function() {
            $scope.dt = new Date();
          };
          $scope.today();

          $scope.clear = function() {
            $scope.dt = null;
          };

          $scope.today1 = function() {
            $scope.dt1 = new Date();
          };
          $scope.today1();

          $scope.inlineOptions = {
            customClass: getDayClass,
            minDate: new Date(),
            showWeeks: true
          };


          $scope.dateOptions = {
            // dateDisabled: disabled,
            formatYear: 'yy',
            maxDate: new Date(2020, 5, 22),
            minDate: new Date(),
            startingDay: 1
          };

          // Disable weekend selection
          function disabled(data) {
            var date = data.date,
              mode = data.mode;
            return mode === 'day' && (date.getDay() === 0 || date.getDay() === 6);
          }

          $scope.toggleMin = function() {
            $scope.inlineOptions.minDate = $scope.inlineOptions.minDate ? null : new Date();
            $scope.dateOptions.minDate = $scope.inlineOptions.minDate;
          };

          $scope.toggleMin();

          $scope.open1 = function() {
            $scope.popup1.opened = true;
          };

          $scope.open3 = function() {
            $scope.popup3.opened = true;
          };

          $scope.open2 = function() {
            $scope.popup2.opened = true;
          };

          $scope.setDate = function(year, month, day) {
            $scope.dt = new Date(year, month, day);
          };

          $scope.formats = ['dd-MMMM-yyyy', 'yyyy/MM/dd', 'dd.MM.yyyy', 'shortDate'];
          $scope.format = $scope.formats[2];
          $scope.altInputFormats = ['M!/d!/yyyy'];

          $scope.popup1 = {
            opened: false
          };

          $scope.popup2 = {
            opened: false
          };
          $scope.popup3 = {
            opened: false
          };

          var tomorrow = new Date();
          tomorrow.setDate(tomorrow.getDate() + 1);
          var afterTomorrow = new Date();
          afterTomorrow.setDate(tomorrow.getDate() + 1);
          $scope.events = [
            {
              date: tomorrow,
              status: 'full'
            },
            {
              date: afterTomorrow,
              status: 'partially'
            }
          ];

          function getDayClass(data) {
            var date = data.date,
              mode = data.mode;
            if (mode === 'day') {
              var dayToCheck = new Date(date).setHours(0,0,0,0);

              for (var i = 0; i < $scope.events.length; i++) {
                var currentDay = new Date($scope.events[i].date).setHours(0,0,0,0);

                if (dayToCheck === currentDay) {
                  return $scope.events[i].status;
                }
              }
            }

            return '';
          }

}]);
app.controller('dashboardcontroller', ['$scope', '$uibModal', '$state', function($scope, $uibModal, $state) {
        // var self = this;
        // self.animationsEnabled = true;

        // self.open = function(){
        //   alert($scope.commodityid);
        //       var modalInstance = $uibModal.open({
        //       animation: self.animationsEnabled,
        //       ariaLabelledBy: 'modal-title',
        //       ariaDescribedBy: 'modal-body',
        //       templateUrl: 'faq.html',
        //       controller: 'ModalController',
        //       controllerAs: 'vm'

        //   });
        // };


}]);
