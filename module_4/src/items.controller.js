(function() {
  'use strict';

  function ItemsController(items) {
    this.items = items;
  }

  ItemsController.$inject = ['items'];

  angular.module('app')
    .controller('ItemsController', ItemsController);
})();
