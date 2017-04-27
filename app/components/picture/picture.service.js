/**
 * @ngdoc overview
 * @name tsPicture.PictureFct
 * @class
 *
 * @description
 * Factory for getting picture
 *
 */

import Firebase from 'firebase';

export default /*@ngInject*/$injector => {
  const $firebaseObject = $injector.get('$firebaseObject');
  const FBURL = $injector.get('FBURL');

  const ref = new Firebase(`${FBURL}`);
  const Picture = $firebaseObject(ref);

  return Picture;
};