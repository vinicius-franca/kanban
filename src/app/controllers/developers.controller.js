export function DevelopersController($scope, $http, $rootScope, $location){
        
    // TODO: Consumir a lista via serviço
    if(localStorage.developers){
        $scope.developersList = JSON.parse(localStorage.developers);
    }
    else{        
        $http.get('data/developers.json').then(function(response) {
            $scope.developersList = response.data;
            localStorage.developers = JSON.stringify($scope.developersList);
        });
    }

    $scope.formName = "Developers";
    
    $scope.formFields = [
        {type: 'text', model:'name', label: 'Nome', required: true, data: ""}
    ];
    
    $rootScope.subscribe('setDataDevelopers', (event, data) => {
        console.log(event);
        $scope.developersList.push(angular.copy(data));   
        localStorage.developers = JSON.stringify($scope.developersList);
        $location.path(`/developers`);
    });
}
