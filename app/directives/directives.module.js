import filereadDirective from './fileread.directive';

export default angular.module('myDirect', [])
  .directive('fileread', filereadDirective)
  .name;