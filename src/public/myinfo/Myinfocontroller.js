(function(){
"use strcit";

angular.module('public')
.controller('MyinfoController', MyinfoController)


MyinfoController.$inject = ["RegisterService", "ApiPath"];
function MyinfoController(RegisterService, ApiPath){
	var infoCtrl = this;
	
	if (RegisterService.info.length === 0){
		infoCtrl.sign = true;
		infoCtrl.check = false;
		} else {infoCtrl.sign = false;
				infoCtrl.check = true;
		}
	
	
	
	
	infoCtrl.firstname = RegisterService.info[0];
	infoCtrl.lastname = RegisterService.info[1];
	infoCtrl.email = RegisterService.info[2];
	infoCtrl.phone = RegisterService.info[3];
	infoCtrl.menu = RegisterService.info[4];
	infoCtrl.basePath = ApiPath;
	
	var promise = RegisterService.getItem(infoCtrl.menu);
	
	promise.then(function(response){
		data = response.data;
		infoCtrl.title = data.name;
		infoCtrl.description = data.description;
	})
	
	
	
	


}




})();