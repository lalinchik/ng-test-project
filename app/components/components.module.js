import angular from 'angular';

import layouts from './layouts';
import router from './router';
import notes from './notes';
import addTagPopup from '../components/popup-add-tag';
import tag from '../components/tag';

import './styles';

export default angular.module('tsComponents', [
  layouts,
  router,
  notes,
  addTagPopup,
  tag
])
  .name;
