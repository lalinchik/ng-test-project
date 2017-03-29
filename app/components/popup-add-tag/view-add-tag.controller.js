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

  handleClick() {
    this.$scope.$emit('closePopup', { isAddTagPopupShow: false });
  }
}