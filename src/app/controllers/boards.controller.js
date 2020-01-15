export function BoardsController($scope, $http, $rootScope, $location){
    
    if(localStorage.kanbans){
        $scope.kanbans = JSON.parse(localStorage.kanbans); 
    }
    if(localStorage.lanes){
        $scope.lanes = JSON.parse(localStorage.lanes); 
    }
    if(localStorage.developers){
        $scope.developers = JSON.parse(localStorage.developers); 
    }
    

    $scope.changeKanban = function(name){
        $scope.lanesByKanban = [];
        
        $scope.lanes.forEach(lane => {
            if (lane.Kanban == name){
                $scope.lanesByKanban.push(angular.copy(lane));
            }
        });
        $rootScope.publish(`changeKanban`, $scope.lanesByKanban);
    }
}
