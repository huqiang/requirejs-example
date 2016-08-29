console.log(requirejs);
var reqOne = requirejs.config({
  context: 'module1',
  baseUrl: 'http://localhost:8080/jquery_to_load_multiple_requirejs_apps/module1',
  paths: {
    'app': 'appOne'
  },
  callback: function() {
    console.log('require loaded');

  }
});

define('jquery', function() {
  return jQuery;
});

define('jquery', function() {
  return jQuery;
});
reqOne(['app'], function(
  app
) {
  app.init('app 1');
});