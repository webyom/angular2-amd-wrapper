/* global define, ng */

define('angular2/instrumentation', function (require) {
  var instrumentation = {__esModule: true};
  for (var p in ng.instrumentation) {
    instrumentation[p] = ng.instrumentation[p];
  }
  return instrumentation;
});