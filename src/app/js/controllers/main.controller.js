export function MainController($scope, $location, $routeParams){
    $scope.title = "HOME PAGE"
    $scope.formFields = [
        {type: 'text', model:'name', label: 'Nome', required: true, data: ""},
        {type: 'select', model: 'unitMeasurement', label: 'Unidade de medida', required: true, options: [{label:'mL'}, {label:'mg'}], data: ""},
        {type: 'number', model: 'quantity', label: 'Quantidade', required: false, data: ""},
        {type: 'textarea', model: 'orientation', label: 'Orientação', required: true, data: ""}
    ];
}

