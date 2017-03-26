/**
 * @ngdoc controller
 * @name tsHeader.HeaderCtrl
 * @class
 *
 * @description Controller for header component
 */
export default class HeaderCtrl {
  /*@ngInject*/
  constructor($injector) {
    this.uploadme = {};
    this.uploadme.src = '';
  }
}