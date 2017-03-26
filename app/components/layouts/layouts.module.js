import angular from 'angular';
import router  from '../router';

import menuComponent   from './menu/menu-layout.component';
import headerComponent from './header/header-layout.component';

/**
 * @ngdocs overview
 * @name tsLayouts
 *
 * @description
 * Module for layout components like header or footer
 */

export default angular.module('tsLayouts', [
  router
])
  .component('tsMenu', menuComponent)
  .component('tsHeader', headerComponent)
  .name;

