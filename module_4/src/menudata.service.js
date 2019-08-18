(function() {
  'use strict';

  function MenuDataService($http) {
    this.getAllCategories = function() {
      return $http({
        method: 'GET',
        url: ' https://davids-restaurant.herokuapp.com/categories.json'
      })
      .then(response => {
        return response.data;
      })
      .catch(console.log);
    }

    this.getItemsForCategory = function(categoryShortName) {
      return $http({
        method: 'GET',
        url: ' https://davids-restaurant.herokuapp.com/menu_items.json',
        params: {
          category: categoryShortName
        }
      }).then(response => {
        return response.data.menu_items;
      });
    }
  };

  MenuDataService.$inject = ['$http'];

  angular.module('app')
    .service('MenuDataService', MenuDataService);
})();
