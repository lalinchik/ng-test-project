/**
 * @ngdoc controller
 * @name tsMain.MainCtrl
 * @class
 *
 * @description Controller for Main component
 */
export default class MainCtrl {
  /*@ngInject*/
  constructor($injector) {
    this.Notes = $injector.get('NotesFct');
  }

  onLoadFile(src) {
    this.src = src;
  }

  $onInit() {
    this.notes = this.Notes.query();
  }
}