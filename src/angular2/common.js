/* global define, ng */

define('angular2/common', function (require) {
  var common = {__esModule: true};
  for (var p in ng.common) {
    common[p] = ng.common[p];
  }
  return common;
});