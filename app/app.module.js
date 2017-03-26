import angular from 'angular';
import componentsModule from './components';
import directivesModule from './directives';
import tsViewMain from './view-main';

angular.module('tsApp', [
  componentsModule,
  directivesModule,
  tsViewMain
]);
