/**
 * @ngdoc controller
 * @name tsTag.TagCtrl
 * @class
 *
 * @description Controller for tag component
 */
export default class TagCtrl {
  /*@ngInject*/
  constructor($injector, $scope) {
    this.$scope = $scope;
    this.Notes = $injector.get('NotesFct');
    this.top = `${this.elementCoordinates.offsetY}px`;
    this.left = `${this.elementCoordinates.offsetX}px`;
  }
}