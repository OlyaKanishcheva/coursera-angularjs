(function() {
  'use strict';

  angular.module('app', []);

  function MenuService($http) {
    this.getItemsByDesc = function(description) {

      if (!description) {
        return Promise.resolve([]);
      }

      return $http({
          method: 'GET',
          url: ('https://davids-restaurant.herokuapp.com/menu_items.json')
      }).then(response => {
        const list = response.data.menu_items;
        const founded = list.filter(item => {
          return item.description.indexOf(description) > -1;
        });
        return founded;
      })
    }
  }

  MenuService.$inject = ['$http'];
  angular.module('app').service('menuService', MenuService);

  function SearchListCtrl($scope, menuService) {
    $scope.list;
    $scope.desc;
    $scope.loading = false;

    $scope.seachByDesc = function() {
      $scope.loading = true;
      menuService.getItemsByDesc($scope.desc)
        .then(list => {
          $scope.list = list;
        })
        .catch(console.error)
        .finally(() => {
          $scope.loading = false;
        })
    }

    $scope.onRemove = function(idx) {
      $scope.list.splice(idx, 1);
    }

    $scope.onInputKeyPress = function(e) {
      const keyCode = e.which || e.keyCode;
      if(keyCode === 13) {
        $scope.seachByDesc();
      }
    }
  }

  SearchListCtrl.$inject = ['$scope', 'menuService'];
  angular.module('app').controller('searchListCtrl', SearchListCtrl);

  function MenuListDirectiveCtrl($scope) {
    console.warn('Just for fun controller');
  }
  MenuListDirectiveCtrl.$inject = ['$scope'];
  angular.module('app').controller('MenuListDirectiveCtrl', MenuListDirectiveCtrl);

  function MenuList() {
    const ddo = {
      restrict: 'E',
      templateUrl: './menuList.html',
      scope: false,
      controller: MenuListDirectiveCtrl,
      bindToController: true
    };
    return ddo;
  }
  angular.module('app').directive('menuList', MenuList);
})();
