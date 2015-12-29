/* global define, ng */

define('angular2', function (require) {
  return {
    core: require('./angular2/core'),
    router: require('./angular2/router'),
    platform: require('./angular2/platform'),
    __esModule: true
  };
});