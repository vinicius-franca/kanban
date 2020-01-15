export function boardComponent($rootScope, $compile) {
  'ngInject';

  let directive = {
    restrict: 'E',
    transclude: true,
    templateUrl: './templates/board.html',
    scope: {
      lanes: '=',
      developers: '='
    },
    link: linkFunc,
    controller: 'BoardController',
  };

  return directive;

  function linkFunc(scope, element, attribute) {
    scope.$element = element;
    
    if (scope.developers) {
    }

    $rootScope.subscribe('changeKanban', (event, data) => {
      createLanes(data);
      createRows(scope.developers);
    });

    function createLanes(data){
      let wrapper = angular.element(document.querySelector('.board'));
      wrapper.html('');
      data.forEach((item) => {
        wrapper.append(`<div class="lane"><div class="lane-header bg-gray text-center"><h2 class="mb-0">${ item.name }</h2></div></div>`);        
        $compile(wrapper)(scope);
      });
    }

    function createRows(data){
      const lanes = document.querySelectorAll('.lane');

      lanes.forEach((lane) => {
        data.forEach((item) => {
          let div = document.createElement("div");
          div.className = 'developer';
          div.textContent = item.name;
          lane.appendChild(div);        
        });
      });

      /* let tbody = angular.element(element).find('tbody');
      Object.getOwnPropertyNames(data).forEach( (obj, index) => {
        tbody.append(`<tr id="row-${ index }">${obj}</tr>`);
        
        let line = document.getElementById(`row-${index}`);
        Object.keys(data[obj]).map(function(objectKey) {
            let value = data[obj][objectKey];
            let td = document.createElement('td');
            td.textContent = value;
            line.appendChild(td);
        });
      }); */
    }
  }
}
