/* global define, ng */

define('angular2', ['require', 'exports', 'module', './angular2/core', './angular2/platform'], function(require) {
  return {
    core: require('./angular2/core'),
    platform: require('./angular2/platform')
  };
});

/* global define, ng */

define('angular2/core', ['require', 'exports', 'module'], function(require) {
  return {
    Component: ng.core.Component,
    View: ng.core.View
  };
});

/* global define, ng */

define('angular2/platform', ['require', 'exports', 'module', './platform/browser'], function(require) {
  return {
    browser: require('./platform/browser')
  };
});

/* global define, ng */

define('angular2/platform/browser', ['require', 'exports', 'module'], function(require) {
  return {
    bootstrap: ng.platform.browser.bootstrap
  };
});