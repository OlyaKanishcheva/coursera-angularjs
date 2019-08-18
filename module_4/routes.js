(function() {
  'use strict';

  angular.module('app')
    .config(RoutesConfig);

  RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
  function RoutesConfig($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/home');

    $stateProvider
      .state('home', {
        url: '/home',
        template: '<h3>It is just home page.</h3>'
      })
      .state('categories', {
        url: '/categories',
        templateUrl: './src/templates/categoriesPage.html',
        controller: 'CategoryPageController as pageCtrl',
        resolve: {
          categoriesList: ['MenuDataService', function(MenuDataService) {
            return MenuDataService.getAllCategories();
          }]
        }
      })
      .state('items', {
        url: '/items/{category}',
        templateUrl: './src/templates/items.html',
        controller: 'ItemsController as itemsCtrl',
        resolve: {
          items: ['$stateParams', 'MenuDataService', function($stateParams, MenuDataService) {
            return MenuDataService.getItemsForCategory($stateParams.category);
          }]
        }
      })
  }
})();
