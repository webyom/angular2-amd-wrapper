/* global define, ng */

define('angular2', ['require', 'exports', 'module', './angular2/core', './angular2/common', './angular2/compiler', './angular2/platform', './angular2/http', './angular2/router', './angular2/instrumentation', './angular2/upgrade'], function (require) {
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

/* global define, ng */

define('angular2/core', ['require', 'exports', 'module'], function (require) {
  var core = {__esModule: true};
  for (var p in ng.core) {
    core[p] = ng.core[p];
  }
  return core;
});

/* global define, ng */

define('angular2/common', ['require', 'exports', 'module'], function (require) {
  var common = {__esModule: true};
  for (var p in ng.common) {
    common[p] = ng.common[p];
  }
  return common;
});

/* global define, ng */

define('angular2/compiler', ['require', 'exports', 'module'], function (require) {
  var compiler = {__esModule: true};
  for (var p in ng.compiler) {
    compiler[p] = ng.compiler[p];
  }
  return compiler;
});

/* global define, ng */

define('angular2/platform', ['require', 'exports', 'module', './platform/browser', './platform/common_dom'], function (require) {
  return {
    browser: require('./platform/browser'),
    common_dom: require('./platform/common_dom'),
    __esModule: true
  };
});

/* global define, ng */

define('angular2/platform/browser', ['require', 'exports', 'module'], function (require) {
  var browser = {__esModule: true};
  for (var p in ng.platform.browser) {
    browser[p] = ng.platform.browser[p];
  }
  return browser;
});

/* global define, ng */

define('angular2/platform/common_dom', ['require', 'exports', 'module'], function (require) {
  var common_dom = {__esModule: true};
  for (var p in ng.platform.common_dom) {
    common_dom[p] = ng.platform.common_dom[p];
  }
  return common_dom;
});

/* global define, ng */

define('angular2/http', ['require', 'exports', 'module'], function (require) {
  var http = {__esModule: true};
  for (var p in ng.http) {
    http[p] = ng.http[p];
  }
  return http;
});

/* global define, ng, $traceurRuntime */

define('angular2/router', ['require', 'exports', 'module'], function (require) {
  var router = {__esModule: true};
  for (var p in ng.router) {
    router[p] = ng.router[p];
  }
  return router;
});

/* global define, ng */

define('angular2/instrumentation', ['require', 'exports', 'module'], function (require) {
  var instrumentation = {__esModule: true};
  for (var p in ng.instrumentation) {
    instrumentation[p] = ng.instrumentation[p];
  }
  return instrumentation;
});

/* global define, ng */

define('angular2/upgrade', ['require', 'exports', 'module'], function (require) {
  var upgrade = {__esModule: true};
  for (var p in ng.upgrade) {
    upgrade[p] = ng.upgrade[p];
  }
  return upgrade;
});

require.processDefQueue();