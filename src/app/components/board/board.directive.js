export function boardComponent($rootScope, $compile) {
  'ngInject';

  let directive = {
    restrict: 'E',
    transclude: true,
    templateUrl: './templates/board.html',
    scope: {
      lanes: '=',
      developers: '=',
      stickers: '='
    },
    link: linkFunc,
    controller: 'BoardController',
  };

  return directive;

  function linkFunc(scope, element, attribute) {
    scope.$element = element;
    
    $rootScope.subscribe('changeKanban', (event, data) => {
      createLanes(data.lanes);      
      createRows(scope.developers);
      createColLabel(scope.developers);
      addStickers(data.stickers);
    });

    function createLanes(data){
      let wrapper = angular.element(document.querySelector('.board'));
      wrapper.html('');      
      wrapper.append(`<div class="developer-col"></div>`);
      data.forEach((item) => {
        wrapper.append(`<div class="lane" data-name="${ item.name }"><div class="lane-header bg-gray text-center"><h2 class="mb-0">${ item.name }</h2></div></div>`); 
      });
    }

    function createRows(data){
      const lanes = document.querySelectorAll('.lane');      
      lanes.forEach((lane) => {
        data.forEach((item) => {
          let div = document.createElement("div");          
          let divCol = document.createElement("div");
          divCol.textContent = item.name;
          div.className = 'developer';
          div.setAttribute('data-name', item.name);
          lane.appendChild(div);            
        });
      });
    }

    function createColLabel(data){  
      const developerCol = document.querySelector('.developer-col');
      data.forEach((item) => {
        let div = document.createElement("div");        
        let p = document.createElement("p");       
        p.textContent = item.name;     
        div.appendChild(p);
        developerCol.appendChild(div);    
      });
    }

    function addStickers(data){
      const lanes = document.querySelectorAll('.lane');
      lanes.forEach((lane) => {
        const developers = lane.querySelectorAll('.developer');
        developers.forEach((developer) => {          
          data.forEach((item) => {
            if (item.lane == lane.dataset.name && item.developer == developer.dataset.name){ 
              let div = document.createElement("div");
              div.className = `sticker ${ item.type }`;              
              div.setAttribute('data-name', item.name); 
              //div.setAttribute('right-click', '');                               
              div.textContent = item.name;         
              developer.appendChild(div);              
              $compile(div)(scope);             
            }
          });
        });
      });
    }
  }
}
