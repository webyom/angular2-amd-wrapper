/* global define, ng */

define('angular2/platform/common_dom', function (require) {
  var common_dom = {__esModule: true};
  for (var p in ng.platform.common_dom) {
    common_dom[p] = ng.platform.common_dom[p];
  }
  return common_dom;
});