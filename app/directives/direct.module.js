import angular from 'angular';

import filereadDirective from './fileread.directive';

export default angular.module('tsDirect', [])
  .directive('tsFileread', filereadDirective)
  .name;
