App.controller("TimeoutPageController", [
  "$scope",
  "$timeout",
  function ($scope, $timeout) {

    $timeout(function () {
      $scope.superHeroes = [
        {name: "Bolek", age: 11, id: 111},
        {name: "Lolek", age: 12, id: 222},
        {name: "Reksio", age: 6, id: 333}
      ];
    }, 3000);

  }
]);
