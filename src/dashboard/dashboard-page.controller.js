App.controller("DashboardPageController", [
  "$scope",
  "menuItems",
  function ($scope, menuItems) {
    $scope.menuItems = menuItems;
  }
]);
