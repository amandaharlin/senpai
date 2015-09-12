require('angular');
require('angular-ui-router');

var senpai = {
  app: angular.module('app', ['ui.router', 'partials', 'directives']),
  directives: angular.module('directives', [])
};

global.senpai = senpai;
require('./features/list/directive');
require('./features/listitem/directive');
require('./features/katy/view');
require('./features/lottie/view');


senpai.app.run();
