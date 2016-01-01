/* global define, ng */

define('angular2/platform', function (require) {
  return {
    browser: require('./platform/browser'),
    common_dom: require('./platform/common_dom'),
    __esModule: true
  };
});