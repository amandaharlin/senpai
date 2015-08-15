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
      {
        id: 0,
        value: "jessica"
      },
      {
        id: 1,
        value: "ada"
      },
      {
        id: 2,
        value: "amanda"
      }];
    
    function addItem(list) {
      var itemValue = prompt('Enter item name:');
      console.log(list.length);
      console.log(list[list.length-1]);
      console.log(list[list.length-1].id);
      
      if(itemValue) {
        var newItem =
            {
              id: list.length, // make unique
              value: itemValue
            };
        
        list.push(newItem);
      }
    }
    $scope.add = addItem;

    function deleteItem(listitem) {
      var doIt = confirm('are you sure you want to delete ' + listitem.value + '?');

      if (doIt) {
        $scope.list.splice(listitem.id, 1);
      }
    }
    $scope.delete = deleteItem;
  }

  var scope = {
    id: "@",
    value: "=?"
  };

  return {
    restrict: 'E',
    scope: scope,
    template: '<div ng-repeat="item in list"> <button ng-click="delete(item)"> delete </button> {{item.value}} </div><button ng-click="add(list)">Add item</button>',
    controller: itemListController
  };
}

app.directive('itemList', itemListDirective);

//app.controller('itemListController', itemListController($scope));

app.run();