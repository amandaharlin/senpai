require('angular');
require('angular-ui-router');
var uuid = require('uuid');


var app = angular.module('app', ['ui.router', 'partials']);


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
    
    function addItem(list) {
      var itemValue = prompt('Enter item name:');
      
      if(itemValue) {
        var newItem =
            {
              id: uuid.v1(), // make unique
              value: itemValue
            };
        
        list.push(newItem);
      }
    }

    function deleteItem(list, listitem, index) {
      var doIt = confirm('are you sure you want to delete ' + listitem.value + '?');

      if (doIt) {
        list.splice(index, 1);
      }
    }
    
    $scope.add = addItem;
    $scope.delete = deleteItem;
    
    $scope.list = [
      {
        id: uuid.v1(),
        value: "jessica"
      },
      {
        id: uuid.v1(),
        value: "ada"
      },
      {
        id: uuid.v1(),
        value: "amanda"
      }];
  }

  var scope = {
    id: "@",
    value: "=?"
  };

  return {
    restrict: 'E',
    scope: scope,
    templateUrl: 'list/partial.html',
    controller: itemListController
  };
}

app.directive('itemList', itemListDirective);

app.run();