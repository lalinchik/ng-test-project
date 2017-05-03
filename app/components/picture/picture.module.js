import angular from 'angular';
import Picture from './picture.service';

/**
 * @ngdocs overview
 * @name tsPicture
 *
 * @description
 * Module for picture model
 */
export default angular.module('tsPicture', [])
  .factory('PictureFct', Picture)
  .name;
