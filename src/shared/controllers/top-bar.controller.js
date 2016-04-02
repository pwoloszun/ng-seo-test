App.controller("TopBarController", [
  "$scope",
  "menuItems",
  function ($scope, menuItems) {
    $scope.menuItems = menuItems;
  }
]);
