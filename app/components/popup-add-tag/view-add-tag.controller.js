/**
 * @ngdoc controller
 * @name tsAddTag.AddTagCtrl
 * @class
 *
 * @description Controller for add tag component
 */
export default class AddTagCtrl {
  /*@ngInject*/
  constructor($scope) {
    this.$scope = $scope;

    this.$onChanges = function (changes) {
      this.offsetX = changes.offsetX.currentValue;
      this.offsetY = changes.offsetY.currentValue;
    };
  }

  handleClickCancelButton() {
    this.$scope.$emit('closePopup', {
      isAddTagPopupShow: false
    });
  }

  handleClickSubmitButton() {
    this.$scope.$emit('addNewTag', {
      notes: this.noteText,
      isAddTagPopupShow: false,
      offsetX: this.offsetX,
      offsetY: this.offsetY
    });
  }
}
