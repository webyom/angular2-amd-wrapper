/* global define, ng */

define('angular2/platform', function (require) {
  return {
    browser: require('./platform/browser'),
    __esModule: true
  };
});