function lottieStateProvider($stateProvider) {
  var lottie = {
    url: 'lottie',
    templateUrl: 'lottie/partial.html'
  }

  $stateProvider.state('lottie', lottie)
}

angular.module('app').config(lottieStateProvider);
