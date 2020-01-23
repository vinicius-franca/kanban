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
    if(localStorage.stickers){
        $scope.stickers = JSON.parse(localStorage.stickers); 
    }
    
    $scope.teste = function(id){
        console.log(id);
    }
    
    $rootScope.subscribe('stickerContextMenu', (event, element, scope) => {
        console.log(element, event, scope);
    });

    $scope.changeKanban = function(name){
        $scope.lanesByKanban = [];        
        $scope.stickersByKanban = [];
        $scope.lanes.forEach(lane => {
            if (lane.kanban == name){
                $scope.lanesByKanban.push(angular.copy(lane));
            }
        });

        $scope.stickers.forEach(sticker => {
            if (sticker.kanban == name){
                $scope.stickersByKanban.push(angular.copy(sticker));
            }
        });
        $rootScope.publish(`changeKanban`, { 'lanes' : $scope.lanesByKanban, 'stickers' : $scope.stickersByKanban });
    }

    $scope.moveSticker = function(id){
        console.log(id);
    }
}
