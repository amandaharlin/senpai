
function lottieViewController($scope, lottie){
  console.log('lottie', lottie)
  
  $scope.page = lottie.photos.page;
  $scope.photos = lottie.photos.photo;
}

senpai.controllers.controller('lottieViewController', lottieViewController);