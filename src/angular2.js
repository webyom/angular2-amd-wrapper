/* global define, ng */

define('angular2', function (require) {
  return {
    core: require('./angular2/core'),
    common: require('./angular2/common'),
    compiler: require('./angular2/compiler'),
    platform: require('./angular2/platform'),
    http: require('./angular2/http'),
    router: require('./angular2/router'),
    instrumentation: require('./angular2/instrumentation'),
    upgrade: require('./angular2/upgrade'),
    __esModule: true
  };
});