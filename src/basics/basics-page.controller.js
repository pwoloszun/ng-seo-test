App.controller("BasicsPageController", [
  "$scope",
  function ($scope) {
    $scope.superHeroes = [
      {name: "Batman", age: 66, id: 1},
      {name: "Superman", age: 33, id: 2},
      {name: "Spider-Man", age: 22, id: 3}
    ];
  }
]);
