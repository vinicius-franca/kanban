export function LanesController($scope, $location, $http, $rootScope){            
    // TODO: Consumir a lista via serviço
    if(localStorage.lanes){
        $scope.lanesList = JSON.parse(localStorage.lanes);  
    }
    else{        
        $http.get('data/lanes.json').then(function(response) {
            $scope.lanesList = response.data;
            localStorage.lanes = JSON.stringify($scope.lanesList); 
        });
    }

    $scope.formName = "Lanes";

    $scope.formFields = [
        {type: 'text', model:'name', label: 'Nome', required: true, data: ""},
        {type: 'select', model:'kanban', label: 'kanban', required: true, data: "", options: [{label:'kanban 1'}, {label:'kanban 2'}, {label:'kanban 3' }]}
    ];
    
    $rootScope.subscribe('setDataLanes', (event, data) => {
        $scope.lanesList.push(angular.copy(data));   
        localStorage.lanes = JSON.stringify($scope.lanesList);
        $location.path(`/lanes`);
    });
}

