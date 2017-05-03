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
    this.top = `${ this.elementCoordinates.offsetY }px`;
    this.left = `${ this.elementCoordinates.offsetX }px`;
  }
}
