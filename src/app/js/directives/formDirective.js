angular.module("App")
.directive("formDirective", function(){
    return {
        templateUrl: "FormDirective.html",
        restrict: "E",
        replace:true,        
        controller:'MainController',
        scope:{
            fields: "="
        }
    }
});
