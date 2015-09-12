function katyBlogStateProvider($stateProvider) {
  var katyBlogState = {
    url: '/blog',
    templateUrl: 'katy/katyBlog/partial.html'
  }
  $stateProvider.state('katy.blog', katyBlogState);
}

angular.module('app').config(katyBlogStateProvider);
