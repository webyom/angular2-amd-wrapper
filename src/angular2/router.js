/* global define, ng */

define('angular2/router', function (require) {
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