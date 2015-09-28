
function lottieViewController($scope, lottie){
  console.log('lottie', lottie);
  
  $scope.comments = lottie.data.children;
  
  $scope.comments.forEach(function(element) {
    var link_id = element.data.link_id.slice(3);
    var link_title = element.data.link_title.replace(/\s/g, '_');;
    
    element.data.subreddit_url = 'https://www.reddit.com/r/' + element.data.subreddit;
    element.data.comment_url = 'https://www.reddit.com/r/' + element.data.subreddit + '/comments/' + link_id + '/' + link_title + '/' + element.data.id + '?context=3';
  });
}

senpai.controllers.controller('lottieViewController', lottieViewController);