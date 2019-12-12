export function DevelopersController($scope, $location, $routeParams, $http){
        
    $scope.title = "Desenvolvedores";

    $http.get('data/developers.json').then(function(response) {
        $scope.developersList = response.data;

        $scope.developersList.forEach(developer => {
            element.append(`<div> ID: ${ developer.id } | ${developer.name}</div>`)
        });
    });
}

