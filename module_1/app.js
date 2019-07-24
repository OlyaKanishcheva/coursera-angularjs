(function() {
  'use strict';

  angular.module('app', []);
  angular.module('app').controller('CheckItemsCtrl', CheckItemsCtrl);

  function CheckItemsCtrl($scope) {
    $scope.itemsStr = '';

    $scope.checkIfTooMuch = function() {
      const dirtyItems = $scope.itemsStr.split(',');
      const items = dirtyItems.filter(item => item && item.trim().length > 0);
      const itemsCount = items.length;

      if (!itemsCount) {
        $scope.mode = 'empty';
        return null;
      }

      if (itemsCount <= 3) {
        $scope.mode = 'enjoy';
      } else {
        $scope.mode = 'tooMuch';
      }

    }
  };

  CheckItemsCtrl.$inject = ['$scope'];

})();
