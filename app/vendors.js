const deps = [
  'angular/angular.min.js',
  'angular-resource/angular-resource.min.js'
];

const depsFull = [
  'angular-ui-router'
];

module.exports = deps.map(dep => dep.split('/')[0]).concat(depsFull);
