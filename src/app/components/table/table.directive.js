export function tableComponent() {
  'ngInject';

  let directive = {
    restrict: 'E',
    transclude: true,
    templateUrl: './templates/table.html',
    scope: {
      data: '=',
    },
    link: linkFunc,
    controller: 'TableController',
  };

  return directive;

  function linkFunc(scope, element, attribute) {
    scope.$element = element;
    
    if (scope.data){
      createColumns(scope.data); 
      createRows(scope.data);
    }
       
    function createColumns(data){
      let thead = angular.element(element).find('thead');
      Object.getOwnPropertyNames(data[0]).forEach((val, idx, array) => {
        thead.append(`<th> ${ val } </th>`);
      });
    }

    function createRows(data){
      let tbody = angular.element(element).find('tbody');
      Object.getOwnPropertyNames(data).forEach( (obj, index) => {
        tbody.append(`<tr id="row-${ index }">${obj}</tr>`);
        
        let line = document.getElementById(`row-${index}`);
        Object.keys(data[obj]).map(function(objectKey) {
            let value = data[obj][objectKey];
            let td = document.createElement('td');
            td.textContent = value;
            line.appendChild(td);
        });
      });
    }
  }
}
