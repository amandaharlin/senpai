function lottieStateProvider($stateProvider) {

  function resolveLottieResource($stateParams, $http) {
    
    var format = $stateParams.format || 'json';
    
    var flickr = 'https://api.flickr.com/services/rest/?method=flickr.people.getPhotos&api_key=8dcf3387ba58d5d1c92ca56afa55ae94&user_id=7352143%40N04&format='+format+'&nojsoncallback=1&api_sig=469aa02567c68e69ffd3cb528ea07b6a';
    
    console.log('params', $stateParams);

    function success(data) {
      console.log('data');
      return data;
    }

    function failure() {
      console.log('stuff broke');
    }

    return $http
      .get(flickr)
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
    url: 'lottie?format',
    templateUrl: 'lottie/partial.html',
    controller: 'lottieViewController',
    resolve: resolveLottie
  }

  $stateProvider.state('lottie', lottie)
}

senpai.app.config(lottieStateProvider);