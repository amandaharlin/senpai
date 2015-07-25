require('angular');
require('angular-ui-router');


var app = angular.module('app', ['ui.router']);


function katyStateProvider($stateProvider){
  var katy = {
    url: 'katy',
    template: '<span>Katy rules the roost!</span>'
  }
  
  $stateProvider.state('katy', katy)
}

function lottieStateProvider($stateProvider){
  var lottie = {
    url: 'lottie',
    template: '<span>Lottie wrecks the roost!</span>'
  }
  
  $stateProvider.state('lottie', lottie)
}

app
  .config(katyStateProvider)
  .config(lottieStateProvider)
  .run();
