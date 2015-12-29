/* global define, ng */

define('angular2', ['require', 'exports', 'module', './angular2/core', './angular2/router', './angular2/platform'], function (require) {
  return {
    core: require('./angular2/core'),
    router: require('./angular2/router'),
    platform: require('./angular2/platform'),
    __esModule: true
  };
});

/* global define, ng */

define('angular2/core', ['require', 'exports', 'module'], function (require) {
  return {
    Component: ng.core.Component,
    View: ng.core.View,
    __esModule: true
  };
});

/* global define, ng */

define('angular2/router', ['require', 'exports', 'module'], function (require) {
  return {
    componentProxyFactory: function (provider) {
      function VirtualComponent(loader, el) {
        require([provider.path], function (module) {
          var Component = module.__esModule && module.default;
          if (!Component) {
            if (typeof provider.provide == 'string') {
              Component = module[provider.provide];
            } else {
              Component = provider.provide(module);
            }
          }
          loader.loadIntoLocation(Component, el, 'content');
        });
      }
      Object.defineProperty(VirtualComponent, 'annotations', {get: function () {
        return [new ng.core.Component({
          selector: 'component-proxy',
          template: '<div #content></div>'
        })];
      }});
      return VirtualComponent;
    },
    __esModule: true
  };
});

/* global define, ng */

define('angular2/platform', ['require', 'exports', 'module', './platform/browser'], function (require) {
  return {
    browser: require('./platform/browser'),
    __esModule: true
  };
});

/* global define, ng */

define('angular2/platform/browser', ['require', 'exports', 'module'], function (require) {
  return {
    bootstrap: ng.platform.browser.bootstrap,
    __esModule: true
  };
});