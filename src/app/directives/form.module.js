import { formDirective }  from './form.directive';
import formController from './form.controller';

export default angular
  .module('form', [])
  .directive('formDirective', formDirective)
  .controller('formController', formController)
  .name;
 