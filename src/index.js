require('angular');
require('angular-ui-router');

var senpaiAppDependencies = [
  'ui.router',
  'partials',
  'directives',
  'controllers'
]

var senpai = {
  app: angular.module('app', senpaiAppDependencies),
  directives: angular.module('directives', []),
  controllers: angular.module('controllers', [])
};

global.senpai = senpai;
require('./features/list/directive');
require('./features/listitem/directive');
require('./features/katy/view');
require('./features/lottie/view');
require('./features/lottie/viewController');




senpai.app.run(debug);


function debug($rootScope) {
//  $rootScope.$on('$stateChangeStart', function(event, toState, toParams, fromState, fromParams) {
//    console.log('$stateChangeStart to ' + toState.to + '- fired when the transition begins. toState,toParams : \n', toState, toParams);
//  });

  $rootScope.$on('$stateChangeError', function(event, toState, toParams, fromState, fromParams) {
    console.log('$stateChangeError - fired when an error occurs during transition.');
    console.log(arguments);
  });

//  $rootScope.$on('$stateChangeSuccess', function(event, toState, toParams, fromState, fromParams) {
//    console.log('$stateChangeSuccess to ' + toState.name + '- fired once the state transition is complete.');
//  });
//
//  $rootScope.$on('$viewContentLoaded', function(event) {
//    console.log('$viewContentLoaded - fired after dom rendered', event);
//  });

  $rootScope.$on('$stateNotFound', function(event, unfoundState, fromState, fromParams) {
    console.log('$stateNotFound ' + unfoundState.to + '  - fired when a state cannot be found by its name.');
    console.log(unfoundState, fromState, fromParams);
  });

}