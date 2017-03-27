import angular from 'angular';
import ngResource from 'angular-resource';
import Notes from './notes.service'

/**
 * @ngdocs overview
 * @name tsNotes
 *
 * @description
 * Module for notes models
 */
export default angular.module('tsNotes', [
  ngResource
])
  .factory('NotesFct', Notes)
  .name;