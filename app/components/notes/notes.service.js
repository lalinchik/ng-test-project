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
  const Notes = $resource('https://test-project-d869a.firebaseio.com//.json', {}, {
    query: {
      method: 'GET',
      isArray: true
    }
  });

  return Notes;
};