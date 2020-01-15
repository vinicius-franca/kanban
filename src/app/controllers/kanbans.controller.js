export function KanbansController($scope, $location, $http, $rootScope){
    // TODO: Consumir a lista via serviço
    if(localStorage.kanbans){
        $scope.kanbansList = JSON.parse(localStorage.kanbans); 
    }
    else{        
        $http.get('data/kanbans.json').then(function(response) {
            $scope.kanbansList = response.data;
            localStorage.kanbans = JSON.stringify($scope.kanbansList);
        });
    }
    
    $scope.formName = "Kanbans";

    $scope.formFields = [
        {type: 'text', model:'name', label: 'Nome', required: true, data: ""}
    ];
    
    $rootScope.subscribe('setDataKanbans', (event, data) => {
        $scope.kanbansList.push(angular.copy(data));   
        localStorage.kanbans = JSON.stringify($scope.kanbansList);
        $location.path('/kanbans');
    });
}

