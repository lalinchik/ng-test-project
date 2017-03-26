import angular from 'angular';

import layouts from './layouts';
import router from './router';

import './styles';

export default angular.module('tsComponents', [
  layouts,
  router
])
  .name;
