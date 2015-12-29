/* global define, ng, $traceurRuntime */

define('angular2/router', function (require) {
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