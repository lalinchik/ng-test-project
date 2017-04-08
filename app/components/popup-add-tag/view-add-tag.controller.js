/**
 * @ngdoc controller
 * @name tsAddTag.AddTagCtrl
 * @class
 *
 * @description Controller for add tag component
 */
export default class AddTagCtrl {
  /*@ngInject*/
  constructor($injector, $scope) {
    this.$scope = $scope;
  }

  handleClickCancelButton() {
    this.$scope.$emit('closePopup', { isAddTagPopupShow: false });
  }

  handleClickSubmitButton() {
    this.$scope.$emit('addNewTag', {
      notes: this.noteText,
      isAddTagPopupShow: false
    });
  }
}