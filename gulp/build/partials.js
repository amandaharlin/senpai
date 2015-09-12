'use strict';
var gulp = require('gulp');
var debug = require('gulp-debug');
var htmlmin = require('gulp-htmlmin');
var html2js = require('gulp-ng-html2js');
var concat = require('gulp-concat');

function generatePartials() {
  var htmlMinOpts = {
    removeComments: true,
    minifyJS: true,
    minifyCSS: true
  };
  var html2JsOpts = {
    moduleName: "partials",
    prefix: ""
  };

  console.log('partials');

  return gulp
    .src('./src/features/**/*partial.html')
    .pipe(debug({
      verbose: true
    }))
    .pipe(htmlmin(htmlMinOpts))
    .pipe(html2js(html2JsOpts))
    .pipe(concat('partials.js'))
    //.pipe(uglify())
    .pipe(gulp.dest('./dist'));
}
gulp.task('build-docs-scripts-partials', generatePartials);