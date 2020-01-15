export function formDirective($compile, $parse) {
    'ngInject';
  
    let directive = {
      transclude: true,
      templateUrl: "./templates/form.html",
      restrict: "E",       
      scope:{
          fields: "=",
          formName: "=",
      },
      link: linkFunc,
      controller: 'formController',
    };
  
    return directive;
  
    function linkFunc(scope) {
      build(scope.fields, scope);      
    }

    function build(data, scope){
      scope.data = data;

      let form = angular.element(document.getElementById('form'));

      data.forEach((field, idx) => {
        let container = angular.element(document.createElement('div'));        
        let label = angular.element(document.createElement('label'));        

        if (field.type == 'text' || field.type == 'date'){   
          let input = angular.element(document.createElement('input'));

          input.addClass("form-control");
          input.attr('type', field.type);        
          angular.element(form.append(container));
          container.addClass('form-group');
          angular.element(container.append(label));
          label.append(field.label);
          angular.element(container.append(input));
          input.attr('ng-model', field.model);
          $compile(input)(scope);
        }
        else if (field.type == 'select') {
          let select = angular.element(document.createElement('select'));
          
          select.addClass("form-control");
          select.attr('ng-model', field.model);        
          angular.element(form.append(container));
          container.addClass('form-group'); 
          angular.element(container.append(label));
          label.append(field.label);
          angular.element(container.append(select));  

          field.options.forEach(option => { 
            let optionField = angular.element(document.createElement('option'));  
            angular.element(select.append(optionField));
            optionField.append(option.label);
            optionField.attr('value', option.label);
          });
          $compile(select)(scope);
        }
      });
    }
  }
  