/* global define, ng */

define('angular2/compiler', function (require) {
  var compiler = {__esModule: true};
  for (var p in ng.compiler) {
    compiler[p] = ng.compiler[p];
  }
  return compiler;
});