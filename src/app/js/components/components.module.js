import tabs  from './tabs/tabs.module.js'

export default angular
  .module('components', [
    tabs
  ])
  .run(function ($log) {
    'ngInject';
  })
  .name;
