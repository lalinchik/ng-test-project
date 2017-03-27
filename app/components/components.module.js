import angular from 'angular';

import layouts from './layouts';
import router from './router';
import notes from './notes';

import './styles';

export default angular.module('tsComponents', [
  layouts,
  router,
  notes
])
  .name;
