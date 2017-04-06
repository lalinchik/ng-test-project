/**
 * @ngdoc overview
 * @name tsNotes.NotesFct
 * @class
 *
 * @description
 * Factory for getting notes
 *
 */

import Firebase from 'firebase';

export default /*@ngInject*/$injector => {
  const $firebaseArray = $injector.get('$firebaseArray');
  const FBURL = $injector.get('FBURL');

  const ref = new Firebase(`${FBURL}`);
  const Notes = $firebaseArray(ref);

  return Notes;
};