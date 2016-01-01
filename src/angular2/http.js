/* global define, ng */

define('angular2/http', function (require) {
  var http = {__esModule: true};
  for (var p in ng.http) {
    http[p] = ng.http[p];
  }
  return http;
});