function katyStateProvider($stateProvider) {
  var katy = {
    url: 'katy',
    templateUrl: 'katy/partial.html'
  }

  $stateProvider.state('katy', katy)
}

angular.module('app').config(katyStateProvider);

require('./katyBlog/stateProvider');
