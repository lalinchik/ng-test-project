import angular from 'angular';
import Notes from './notes.service'

/**
 * @ngdocs overview
 * @name tsNotes
 *
 * @description
 * Module for notes models
 */
export default angular.module('tsNotes', [])
  .factory('NotesFct', Notes)
  .name;