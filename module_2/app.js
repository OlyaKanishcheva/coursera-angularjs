(function() {
  'use strict';

  angular.module('app', []);

  function CheckOffShoppingListService() {
    const service = this;
    service.toBuyList = [
      {
        name: 'cookies',
        quantity: 10
      },
      {
        name: 'chocolate',
        quantity: 3
      },
      {
        name: 'sweet',
        quantity: 6
      },
      {
        name: 'bob',
        quantity: 7
      },
      {
        name: 'alice',
        quantity: 140
      },
      {
        name: 'meat',
        quantity: 5
      }
    ];
    service.boughtList = [];

    service.bought = function(index) {
      service.boughtList.push(service.toBuyList[index]);
      service.toBuyList.splice(index, 1);
    }
  }

  angular.module('app').service('CheckOffShoppingListService', CheckOffShoppingListService);

  function buyCtrl($scope, CheckOffShoppingListService) {
    $scope.list = CheckOffShoppingListService.toBuyList;
    $scope.remove = function(index) {
      CheckOffShoppingListService.bought(index);
    }
  }

  buyCtrl.$inject = ['$scope', 'CheckOffShoppingListService'];

  angular.module('app').controller('buyCtrl', buyCtrl);

  function boughtCtrl($scope, CheckOffShoppingListService) {
    $scope.list = CheckOffShoppingListService.boughtList;
  }

  boughtCtrl.$inject = ['$scope', 'CheckOffShoppingListService'];

  angular.module('app').controller('boughtCtrl', boughtCtrl);

})();
