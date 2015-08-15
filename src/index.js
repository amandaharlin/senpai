require('angular');
require('angular-ui-router');


var app = angular.module('app', ['ui.router']);


function katyStateProvider($stateProvider) {
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

function lottieStateProvider($stateProvider) {
  var lottie = {
    url: 'lottie',
    template: '<span>Lottie wrecks the roost!</span>'
  }

  $stateProvider.state('lottie', lottie)
}


app
  .config(katyStateProvider)
  .config(lottieStateProvider)
  .config(katyBlogStateProvider);


function itemListDirective() {

  function itemListController($scope) {
    $scope.id = 1;
    $scope.value = {
      somestring: "binding wins!"
    };

  }

  var scope = {
    id: "@",
    value: "=?"
  };

  return {
    restrict: 'E',
    scope: scope,
    template: '<div>testtesttest{{value.somestring}}</div>',
    controller: itemListController
  };
}

app.directive('itemList', itemListDirective);

//app.controller('itemListController', itemListController($scope));

app.run();