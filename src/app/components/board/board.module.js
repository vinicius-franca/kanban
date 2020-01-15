import { boardComponent }  from './board.directive';
import BoardController from './board.controller';

export default angular
  .module('board', [])
  .directive('boardComponent', boardComponent)
  .controller('BoardController', BoardController)
  .name;
 