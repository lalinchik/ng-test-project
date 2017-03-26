import angular from 'angular';

import 'angular-ui-router';

import router from './router.service';

/**
 * @ngdoc overview
 * @name tsRouter
 *
 * @description
 * Module for router customization and helpers
 */
export default angular.module('tsRouter', [
  'ui.router'
])
  .config(/*@ngInject*/$locationProvider => $locationProvider.html5Mode(true))
  .provider('routerFct', router)
  .name;
