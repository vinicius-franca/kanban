export function StickersController($scope, $http, $location, $rootScope){
    // TODO: Consumir a lista via serviço
    if(localStorage.stickers){
        $scope.stickersList = JSON.parse(localStorage.stickers);    
    }
    else{        
        $http.get('data/stickers.json').then(function(response) {
            $scope.stickersList = response.data;
            localStorage.stickers = JSON.stringify($scope.stickersList);         
        });
    }
    
    $scope.formFields = [
        {type: 'text', model:'name', label: 'Nome', required: true, data: ""},
        {type: 'select', model:'kanban', label: 'Kanban', required: true, data: "", options: [{label:'kanban 1'}, {label:'kanban 2'}, {label:'kanban 3' }]},
        {type: 'select', model:'raia', label: 'Raia', required: true, data: "", options: [{label:'raia 1'}, {label:'raia 2'}, {label:'raia 3' }]},
        {type: 'select', model:'desenvolvedor', label: 'Desenvolvedor', required: true, data: "", options: [{label:'dev1'}, {label:'dev 2'}, {label:'dev 3' }]},
        {type: 'select', model:'tipo', label: 'Tipo', required: true, data: "", options: [{label:'feature'}, {label:'fix'}, {label:'spike' }]},
        {type: 'date', model:'dtInicio', label: 'Data inicio', required: true, data: ""},
        {type: 'date', model:'dtFim', label: 'Data Fim', required: true, data: ""}        
    ];
    
    $scope.formName = "Stickers";

    $rootScope.subscribe('setDataStickers', (event, data) => {
        $scope.stickersList.push(angular.copy(data));   
        localStorage.stickers = JSON.stringify($scope.stickersList);
        $location.path(`/stickers`);
    });
}

