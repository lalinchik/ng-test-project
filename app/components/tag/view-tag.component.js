import template    from './view-tag.tmpl.html';
import controller from './view-tag.controller';

import './view-tag.css';

/**
 * @ngdoc directive
 * @name tsViewTag.tsViewTag
 * @scope
 *
 * @description Component for tag view
 */
export default {
  template,
  controller,
  controllerAs: 'view',
  bindings: {
    elementCoordinates: '<'
  }
};
