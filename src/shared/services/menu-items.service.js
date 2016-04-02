App.factory("menuItems", [
  "routeStates",
  function (routeStates) {
    var MENU_ITEMS = _(routeStates).map(function (state) {
      return {
        state: state,
        label: _(state).humanize()
      };
    });

    return MENU_ITEMS;
  }
]);
