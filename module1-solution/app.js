
(function () {
  'use strict';

  angular.module('LunchCheck', [])
  .controller('LunchCheckController', LunchCheckController);

  LunchCheckController.$inject = ['$scope'];
  function LunchCheckController($scope) {
    $scope.lunchItems = "";
    $scope.message = "";
    $scope.messageClass = "";

    $scope.checkLunch = function () {
      if (!$scope.lunchItems.trim()) {
        $scope.message = "Please enter data first";
        $scope.messageClass = "red";
        return;
      }

      const items = $scope.lunchItems.split(',')
        .map(item => item.trim())
        .filter(item => item !== '');

      $scope.message = items.length <= 3 ? "Enjoy!" : "Too much!";
      $scope.messageClass = "green";
    };
  }
})();
