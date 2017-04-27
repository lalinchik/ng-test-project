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
  const Notes = $firebaseArray(new Firebase(`${FBURL}/notes`));

  return Notes;
};