import angular from 'angular';
import ngRoute from 'angular-route';
import { config }  from './config/routes';
import { eventBus }  from './config/eventBus';
import table from './components/table/table.module';
import board from './components/board/board.module';
import form from './directives/form.module';

import '../style/app.css';


let app = () => {
  return {
    template: require('./app.html'),
    controller: 'AppCtrl',
    controllerAs: 'app'
  }
};

class AppCtrl {
  constructor() { 
  }  
}

const MODULE_NAME = 'app';

angular.module(MODULE_NAME, [ngRoute, table, form, board])
  .directive('app', app)
  .controller('AppCtrl', AppCtrl)
  .config(['$routeProvider', config])
  .config(['$provide', eventBus]);

export default MODULE_NAME;