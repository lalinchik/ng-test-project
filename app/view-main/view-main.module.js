import angular from 'angular';

import component from './view-main.component';

import './view-main.css';

/**
 * @ngdoc overview
 * @name tsMain
 *
 * @description
 * Hold component for generating main layout
 */
export default angular.module('tsViewMain', [])

  .config(/*@ngInject*/($stateProvider, $urlRouterProvider, routerFctProvider) => {
    routerFctProvider.setDefaultState('main');
    $urlRouterProvider.otherwise('/');

    $stateProvider
      .state('main', {
        url       : '/app',
        component : 'tsMainComponent'
      });
  })
  .run(/*@ngInject*/routerFct => {
    routerFct.init();
  })
  .component('tsMainComponent', component)
  .name;
