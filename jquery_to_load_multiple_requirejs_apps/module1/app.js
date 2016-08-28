requirejs.config({
  context: 'module1',
  baseUrl: 'jquery_to_load_multiple_requirejs_apps/module1',
});

define('jquery', function(){
  return jQuery;
});