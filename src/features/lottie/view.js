function lottieStateProvider($stateProvider) {

  function resolveLottieResource($http) {
    
    // https://api.github.com/repos/amandaharlin/senpai/forks
    var crashmoRedditComments = 'https://www.reddit.com/user/crashmo/comments.json?limit=15';

    function success(data) {
      console.log('success');
      return data;
    }

    function failure() {
      console.log('stuff broke');
    }

    return $http
      .get(crashmoRedditComments)
      .then(success, failure);
  }

  function resolveLottie(lottieResource){
    return lottieResource.data;
  }
  
  var resolveLottie = {
    lottieResource: resolveLottieResource,
    lottie: resolveLottie
  };

  var lottie = {
    url: 'lottie',
    templateUrl: 'lottie/partial.html',
    controller: 'lottieViewController',
    resolve: resolveLottie
  }

  $stateProvider.state('lottie', lottie)
}

senpai.app.config(lottieStateProvider);