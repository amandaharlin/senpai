function listItemDirective() {
  return {
    templateUrl: 'listItem/partial.html'
  };
}

angular.module('app').directive('listItem', listItemDirective);