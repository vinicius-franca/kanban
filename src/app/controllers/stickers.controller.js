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
        {type: 'select', model:'kanban', label: 'Kanban', required: true, data: "", options: [{label:'Kanban 1'}, {label:'Kanban 2'}, {label:'Kanban 3' }, {label:'Kanban 4'}, {label:'Kanban 5'}, {label:'Kanban 6'}, {label:'Kanban 7'}]},
        {type: 'select', model:'lane', label: 'Raia', required: true, data: "", options: [{label:'Lane 1'}, {label:'Lane 2'}, {label:'Lane 3' }, {label:'Lane 4'}, {label:'Lane 5' }, {label:'Lane 6'}, {label:'Lane 7' }]},
        {type: 'select', model:'developer', label: 'Desenvolvedor', required: true, data: "", options: [{label:'Wiggins Duncan'}, {label:'Walton Robinson'}, {label:'Green Goodman'}, {label:'Hardy Downs'}, {label:'Lynn Pierce'}]},
        {type: 'select', model:'type', label: 'Tipo', required: true, data: "", options: [{label:'feature'}, {label:'fix'}, {label:'spike' }]},
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

