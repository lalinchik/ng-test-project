/**
 * @ngdoc controller
 * @name tsMain.MainCtrl
 * @class
 *
 * @description Controller for Main component
 */
export default class MainCtrl {
  /*@ngInject*/
  constructor($injector, $scope) {
    this.$scope = $scope;
    this.Notes = $injector.get('NotesFct');
    this.isAddTagPopupShow = false;

    $scope.$on('closePopup', (event, args) => {
      this.isAddTagPopupShow = args.isAddTagPopupShow;
    });
  }

  onLoadFile(src) {
    this.src = src;
  }

  $onInit() {
    this.notes = this.Notes.query();
  }

  openAddTagPopup() {
    return this.isAddTagPopupShow = !this.isAddTagPopupShow;
  }

}