/* global define, ng */

define('angular2/platform/browser', function (require) {
  var browser = {__esModule: true};
  for (var p in ng.platform.browser) {
    browser[p] = ng.platform.browser[p];
  }
  return browser;
});