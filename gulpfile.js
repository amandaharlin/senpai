'use strict';

var gulp = require('gulp');
var help = require('gulp-task-listing');
var serve = require('gulp-serve');

require('./gulp/build');

gulp.task('help', help);
gulp.task('default', ['help']);

gulp.task('serve', serve('src'));
