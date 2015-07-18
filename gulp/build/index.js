'use strict';
var gulp = require('gulp');
var debug = require('gulp-debug');

function buildIndex() {
  console.log('building index');

  return gulp
    .src('./src/index.html')
    .pipe(debug({verbose:true}))
    .pipe(gulp.dest('./dist'));
}

gulp.task('build-index', buildIndex);
