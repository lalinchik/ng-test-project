import angular from 'angular';

import component from './view-add-tag.component';

/**
 * @ngdocs overview
 * @name tsViewAddTag
 *
 * @description
 * Module for for add tag view
 */
export default angular.module('tsViewAddTag', [])
  .component('tsAddTag', component)
  .name;