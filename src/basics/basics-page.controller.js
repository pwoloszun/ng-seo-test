App.controller("BasicsPageController", [
  "$scope",
  "$http",
  function ($scope, $http) {
    var now = Math.floor(new Date().getTime() / 1000);
    var url = 'http://redape.cloudapp.net/tvguidea/singleslot/' + now + '?channels=[1,159,63,64]&format=json&o=1'
    var ajaxPromise = $http.get(url);
    ajaxPromise.then(function weGotData(response) {
      $scope.channels = response.data.events;
    }, function (err) {
      console.error(err);
    });
  }
]);
