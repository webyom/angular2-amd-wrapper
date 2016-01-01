/* global define, ng */

define('angular2/core', function (require) {
  var core = {__esModule: true};
  for (var p in ng.core) {
    core[p] = ng.core[p];
  }
  return core;
});