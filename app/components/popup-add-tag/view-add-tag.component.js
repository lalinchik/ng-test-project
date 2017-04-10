import controller  from './view-add-tag.controller';
import template    from './view-add-tag.tmpl.html';

import './view-add-tag.css';

/**
 * @ngdoc directive
 * @name tsViewAddTag.tsViewAddTag
 * @scope
 *
 * @description Component for add tag view
 */
export default {
  template,
  controller,
  controllerAs: 'view',
  bindings: {
    offsetX: '<',
    offsetY: '<'
  }
};