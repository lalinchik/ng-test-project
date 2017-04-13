/**
 * @ngdoc controller
 * @name tsTag.TagCtrl
 * @class
 *
 * @description Controller for tag component
 */
export default class TagCtrl {
  /*@ngInject*/
  constructor() {
    let width = angular.element(document.querySelector('.main-image').clientWidth)[0];
    let height = angular.element(document.querySelector('.main-image').clientHeight)[0];
    this.top = `${Math.round((this.elementCoordinates.offsetY - 32) * 100 / height)}%`;
    this.left = `${Math.round((this.elementCoordinates.offsetX - 12) * 100 / width)}%`;
  }
}