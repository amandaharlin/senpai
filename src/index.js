require('angular');
require('angular-ui-router');

var app = angular.module('app', ['ui.router', 'partials']);
require('./features/list/directive');
require('./features/listitem/directive');
require('./features/katy/stateProvider');

function lottieStateProvider($stateProvider) {
  var lottie = {
    url: 'lottie',
    template: '<span>Lottie wrecks the roost!</span>'
  }

  $stateProvider.state('lottie', lottie)
}

app
  .config(lottieStateProvider);

app.run();