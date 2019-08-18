(function() {
  'use strict';

  function CategoryPageController(categoriesList) {
    this.categoriesList = categoriesList;
    this.title = 'Categories list';
  }

  CategoryPageController.$inject = ['categoriesList'];

  angular.module('app')
    .controller('CategoryPageController', CategoryPageController);
})();
