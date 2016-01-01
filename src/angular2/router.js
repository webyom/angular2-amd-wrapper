/* global define, ng, $traceurRuntime */

define('angular2/router', function (require) {
  var router = {__esModule: true};
  for (var p in ng.router) {
    router[p] = ng.router[p];
  }
  return router;
});