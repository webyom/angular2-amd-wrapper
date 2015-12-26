/* global define, ng */

define('angular2', function(require) {
  return {
    core: require('./angular2/core'),
    platform: require('./angular2/platform')
  };
});