/* global define, ng */

define('angular2/upgrade', function (require) {
  var upgrade = {__esModule: true};
  for (var p in ng.upgrade) {
    upgrade[p] = ng.upgrade[p];
  }
  return upgrade;
});