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
    this.isAddTagPopupShow = false;
  }

  onLoadFile(src) {
    this.src = src;
  }

  $onInit() {
    this.notes = this.Notes.query();
  }

  openAddTagPopup(){
    return this.isAddTagPopupShow = !this.isAddTagPopupShow;
  }
}