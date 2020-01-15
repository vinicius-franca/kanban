
function formController($scope, $rootScope) {
    'ngInject';
    
    function _init() {      
      $scope.add = function(fields, formName){
          let obj = {};
          fields.forEach((field) => {
              obj.id = Math.ceil(Math.random() * 9999);
              obj[field.model] = $scope[field.model];            
          });          
          $rootScope.publish(`setData${$scope.formName}`, obj);
      };
    }
  
    _init();
  }
  export default formController;