import angular from 'angular';

import component from './view-tag.component';

/**
 * @ngdocs overview
 * @name tsViewTag
 *
 * @description
 * Module for for tag view
 */
export default angular.module('tsViewTag', [])
  .component('tsTag', component)
  .name;
