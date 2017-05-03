import angularfire from 'angularfire';
import angular from 'angular';
import componentsModule from './components';
import directivesModule from './directives';
import tsViewMain from './view-main';

angular.module('tsApp', [
  componentsModule,
  directivesModule,
  tsViewMain,
  angularfire,
  'firebase'
]).constant('FBURL', 'https://test-project-d869a.firebaseio.com/');
