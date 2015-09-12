require('angular');
require('angular-ui-router');

var app = angular.module('app', ['ui.router', 'partials']);

require('./features/list/directive');
require('./features/listitem/directive');
require('./features/katy/stateProvider');
require('./features/lottie/stateProvider');

app.run();