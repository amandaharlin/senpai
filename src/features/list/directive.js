var uuid = require('uuid');

function listDirective() {

  function listController($scope) {
    
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
    controller: listController
  };
}

angular.module('app').directive('list', listDirective);