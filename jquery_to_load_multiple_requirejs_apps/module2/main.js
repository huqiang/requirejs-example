var reqTwo = require.config({
  context: 'module2',
  baseUrl: '/jquery_to_load_multiple_requirejs_apps/module2',
  paths: {
    'app2': 'app'
  },
  callback: function() {
    define('jquery', function() {
      return jQuery;
    });
    reqTwo(['app'], function(
      app
    ) {
      app.init('app 2');
    });
  }
});