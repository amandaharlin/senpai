var gulp = require('gulp');
var webserver = require('gulp-webserver');

var buildFolder = './dist';
function serveDevelopment() {
  console.log('serving senpai...');

  var serverOpts  = {
      livereload: true,
      port: 3000,
      open: true
    };
  
   return gulp
      .src(buildFolder)
      .pipe(webserver(serverOpts));

}

gulp.task('serve-development', serveDevelopment);
