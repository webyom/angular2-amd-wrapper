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
    ElementRef: ng.core.ElementRef,
    DynamicComponentLoader: ng.core.DynamicComponentLoader,
    __esModule: true
  };
});

/* global define, ng, $traceurRuntime */

define('angular2/router', ['require', 'exports', 'module'], function (require) {
  return {
    ROUTER_PROVIDERS: ng.router.ROUTER_PROVIDERS,
    ROUTER_DIRECTIVES: ng.router.ROUTER_DIRECTIVES,
    RouteConfig: ng.router.RouteConfig,
    
    componentProxyFactory: function (provider) {
      var VirtualComponent = function() {
        function VirtualComponent(loader, elem) {
          require([provider.path], function(module) {
            var RealComponent = module.__esModule && module.default;
            if (!RealComponent) {
              if (typeof provider.provide == 'string') {
                RealComponent = module[provider.provide];
              } else {
                RealComponent = provider.provide(module);
              }
            }
            loader.loadIntoLocation(RealComponent, elem, 'content');
          });
        }
        return ($traceurRuntime.createClass)(VirtualComponent, {}, {});
      }();
      Object.defineProperty(VirtualComponent, 'annotations', {get: function () {
        return [new ng.core.Component({
          selector: 'component-proxy',
          template: '<div #content></div>'
        })];
      }});
      Object.defineProperty(VirtualComponent, "parameters", {get: function () {
        return [[ng.core.DynamicComponentLoader], [ng.core.ElementRef]];
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

require.processDefQueue();