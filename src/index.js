require('angular');
require('angular-ui-router');


var app = angular.module('app', ['ui.router']);

  app.run(
  function test(){
    console.log('hello');
  }
);
