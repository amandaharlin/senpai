require('angular');
require('angular-ui-router');


var app = angular.module('app', ['ui.router']);


function katyStateProvider($stateProvider){
  var katy = {
    url: 'katy',
    template: '<span>Katy rules the roost! <div ui-view></div></span>'
  }

  $stateProvider.state('katy', katy)
}

function katyBlogStateProvider($stateProvider) {
  var katyBlogState = {
    url: '/blog',
    template: '<span>dis ma blawg</span>'
  }
  $stateProvider.state('katy.blog', katyBlogState);
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
  .config(katyBlogStateProvider)
  .run();
