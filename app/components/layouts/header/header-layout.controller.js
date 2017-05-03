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
    this.onLoadFile({ src });
    this.Picture.image = src;
    this.Picture.$save();
    this.Notes.forEach((note, idx) => this.Notes.$remove(this.Notes[idx]));
  }
}
