App.factory("randomBetween", [
  function () {
    var randomBetween = function (min, max) {
      return Math.floor(Math.random() * (max - min)) + min;
    };

    return randomBetween;
  }
]);
