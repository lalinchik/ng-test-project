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
    this.lastClick = {};

    $scope.$on('closePopup', (event, args) => {
      this.isAddTagPopupShow = args.isAddTagPopupShow;
    });

    $scope.$on('addNewTag', (event, args) => {
      this.isAddTagPopupShow = args.isAddTagPopupShow;
      this.Notes.$add({
        note: args.notes,
        coordinates: {
          offsetX: args.offsetX,
          offsetY: args.offsetY
        }
      });
    });
  }

  onLoadFile(src) {
    this.src = src;
  }

  $onInit() {
    this.notes = this.Notes;
  }

  openAddTagPopup($event) {
    this.lastClick.x = $event.offsetX;
    this.lastClick.y = $event.offsetY;
    this.isAddTagPopupShow = !this.isAddTagPopupShow;
  }

}