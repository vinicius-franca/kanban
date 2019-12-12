import angular from 'angular';
import ngRoute from 'angular-route';
import { config }  from './js/config/routes';


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

angular.module(MODULE_NAME, [ngRoute])
  .directive('app', app)
  .controller('AppCtrl', AppCtrl).config(['$routeProvider', config ]);

export default MODULE_NAME;