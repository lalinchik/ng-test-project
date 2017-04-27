/**
 * @ngdoc controller
 * @name tsHeader.HeaderCtrl
 * @class
 *
 * @description Controller for header component
 */
export default class HeaderCtrl {
  /*@ngInject*/
  constructor($injector) {
    this.Picture = $injector.get('PictureFct');
    this.Notes = $injector.get('NotesFct');
  }

  onLoad(src) {
    this.Notes.length = 0;
    this.onLoadFile({ src });
    this.Picture.image = src;
    this.Picture.$save();
  }
}