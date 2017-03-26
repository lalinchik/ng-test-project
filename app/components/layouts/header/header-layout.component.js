import template from './header-layout.tmpl.html';
import controller  from './header-layout.controller';

import './header-layout.css';

/**
 * @ngdoc directive
 * @name tsLayouts.tsHeader
 * @scope
 *
 * @description Header layout component
 */
export default {
  bindings: {
    onLoadFile: '&'
  },
  template,
  controller,
  controllerAs: 'view'
};
