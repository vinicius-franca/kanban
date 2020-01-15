import { tableComponent }  from './table.directive';
import TableController from './table.controller';

export default angular
  .module('table', [])
  .directive('tableComponent', tableComponent)
  .controller('TableController', TableController)
  .name;
 