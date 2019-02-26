(function(){
"use strict";

angular.module('public')
.controller('RegisterController', RegisterController)
.service('RegisterService', RegisterService)
.constant('ApiPath', "https://danfeng-angular.herokuapp.com");
	

RegisterController.$inject = ['$http', 'ApiPath', 'RegisterService'];
function RegisterController($http, ApiPath, RegisterService){
	
	var registerCtrl=this;
	registerCtrl.submit = function () {
		RegisterService.info = [];
		var menu= registerCtrl.user.menu;
		
			var promise= RegisterService.getItem(menu);
			
			
			promise.then(function(response){
				registerCtrl.check = false;
				
			})
			.catch(function(error){
				registerCtrl.check = true;
			})
			
	var first = registerCtrl.user.firstname;
	var last = registerCtrl.user.lastname;
	var email = registerCtrl.user.email;
	var phone = registerCtrl.user.phone;
	
	RegisterService.saveItem(first, last, email, phone, menu);
		
		
		
		
    
	
  };
    
	
}


RegisterService.$inject =['$http', 'ApiPath'];
function RegisterService ($http, ApiPath){
	var service = this;
	
	service.getItem =function(menu){
		var response = $http({
			method:'GET',
			url: (ApiPath + '/menu_items/' + menu + '.json'),
		});
		
		return response;
		};
		
	service.info=[];
	service.saveItem=function(first, last, email, phone, menu){
		service.info.push(first, last, email, phone, menu);
		console.log(service.info)
		return service.info;
	};
		
		
	
}
	
	
	
})();