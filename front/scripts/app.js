var app=angular.module('myapp',['ui.bootstrap','ui.router','ngCookies','ngAnimate','ngSanitize']);        // 'ngAnimate',, 'ngSanitize'
app.constant("CSRF_TOKEN", '{!! csrf_token() !!}');

app.directive('fileModel', ['$parse', function ($parse) {
    return {
        restrict: 'A',
        link: function(scope, element, attrs) {
            var model = $parse(attrs.fileModel);
            var modelSetter = model.assign;
            
            element.bind('change', function(){
                scope.$apply(function(){
                    modelSetter(scope, element[0].files[0]);
                });
            });
        }
    };
}]);

app.service('TimeLeft',function($filter){
	

	// this.func = function(){
	// 	alert('hi');
	// 	return 'qqq';
	// }
	this.data_before = [];
	this.today = new Date();

	var results = $filter('date')(this.today, "yyyy-MM-dd");

    this.differenceInDays = function (firstDate,status) {
        // alert('hello');
        var dt2 = firstDate.split('-'),
            dt1 = results.split('-'),
            one = new Date(dt1[0], dt1[1], dt1[2]),
            two = new Date(dt2[0], dt2[1], dt2[2]);
        
        var millisecondsPerDay = 1000 * 60 * 60 * 24;
        var millisBetween = two.getTime() - one.getTime();
        var days = millisBetween / millisecondsPerDay;

        this.timeleft = Math.floor(days);

       
        if(status=="Pending"||status=="Rejected"||status=="Completed")
        {	
        	
        	return "-";
        }
        else
        {
        	
        	if(this.timeleft > 0)
	        {
	        
	        	return "Completing in "+ this.timeleft +" days";
	        	
	        }
	        else if(this.timeleft < 0)
	        {
	        
	        	return "Overdue By "+ Math.abs(this.timeleft) +" days";
	        	
	        }
	        else
	        {
	        	
	        	return "Today is final day";
	        	
	        };
        };

    
        // return $timeleft;      
    };
});


app.config(function($stateProvider,$urlRouterProvider){
	$urlRouterProvider.otherwise("/home");

	$stateProvider.
		state('home',{
			url: '/home',
			views:{
				"main":{
					templateUrl:"partials/home.html",
					data:{title:'Home'},
					controller:'MainController'
				}
			}
		})
		.state('interestrates',{
			url: '/InterestRates',
			views:{
				"main":{
					templateUrl:"partials/interestrates.html",
					data:{title:'Interest Rates'},
					controller:'faqctrl'
				}
			}
		})
		.state('contactus',{
			url: '/ContactUs',
			views:{
				"main":{
					templateUrl:"partials/contactus.html",
					data:{title:'Contact Us'},
					controller:'mailctrl'
				}
			}
		})
		.state('faq',{
			url: '/FAQs',
			views:{
				"main":{
					templateUrl:"partials/faq.html",
					data:{title:'FAQs'},
					controller:'faqctrl'
				}
			}
		})
		// .state("userprofile",{
		// 	url: "/profile",
		// 	views:{
		// 		"main":{
		// 			templateUrl:"partials/profile.html",
		// 			data:{title:"Profile"},
		// 			controller: "HomeController",
		// 		}
		// 	}
		// })
		.state("transactions",{
			url: "/transactions",
			views:{
				"main":{
					templateUrl:"partials/transactions.html",
					data:{title:"Transactions"},
					controller: "profilecontroller",
				}
			}
		})
		.state("post",{
			url: "/post",
			views:{
				"main":{
					templateUrl:"partials/post.html",
					data:{title:"Need Money"},
					controller: "ProductController",
				}
			}
		})
		.state("dashboard",{
			url: "/dashboard",
			views:{
				"main":{
					templateUrl:"partials/dashboard.html",
					data:{title:"Dashboard"},
					controller: "AdminController",
					controllerAs:"vm"
				}
			}
		})
		// .state("requests",{
		// 	url: "/requests",
		// 	views:{
		// 		"main":{
		// 			templateUrl:"partials/request.html",
		// 			data:{title:"Requests"},
		// 			controller: "HomeController",
		// 		}
		// 	}
		// })
		.state('editprofile',{
			url: '/editprofile',
			views:{
				"main":{
					templateUrl:"partials/editprofile.html",
					data:{title:'Edit Profile'},
					controller:'EditProCtrl'
				}
			}
		})
		.state('login_register',{
			url: '/login',
			views:{
				"main":{
					templateUrl:"partials/login.html",
					data:{title:'Login-Register'},
					controller:'MainController'
				}
			}
		});
});