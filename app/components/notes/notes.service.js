/**
 * @ngdoc overview
 * @name tsNotes.NotesFct
 * @class
 * @extends $resource
 *
 * @description
 * Factory for getting notes
 *
 */

export default /*@ngInject*/$injector => {
  const $resource = $injector.get('$resource');
  const Notes = $resource('notes.json', {}, {
    query: {
      method: 'GET',
      isArray: true
    }
  });

  return Notes;
};