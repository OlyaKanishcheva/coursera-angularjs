(function() {
  'use strict';

  angular.module('app')
    .component('categories', {
      templateUrl: './src/templates/categories.component.html',
      bindings: {
        categoriesList: '<'
      }
    })
})();
