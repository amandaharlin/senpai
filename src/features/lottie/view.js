function lottieStateProvider($stateProvider) {
  var lottie = {
    url: 'lottie',
    templateUrl: 'lottie/partial.html'
  }

  $stateProvider.state('lottie', lottie)
}

//states.config(lottieStateProvider);
senpai.app.config(lottieStateProvider);
