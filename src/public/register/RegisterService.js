(function(){
"use strcit";

angular.module('public')
.service('RegisterService', RegisterService)
.constant('ApiPath', "https://danfeng-angular.herokuapp.com");






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