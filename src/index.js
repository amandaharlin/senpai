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
    $scope.list = [
      { id: 0, value: "jessica"},
      {id: 1, value: "ada"},
      {id: 2, value: "amanda"}];
  }

  var scope = {
    id: "@",
    value: "=?"
  };

  return {
    restrict: 'E',
    scope: scope,
    template: '<div ng-repeat="item in list"> {{item.value}} </div>',
    controller: itemListController
  };
}

app.directive('itemList', itemListDirective);

//app.controller('itemListController', itemListController($scope));

app.run();
