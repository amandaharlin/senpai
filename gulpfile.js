'use strict';

var gulp = require('gulp');
var help = require('gulp-task-listing');
var serve = require('gulp-webserver');

require('./gulp/build');
require('./gulp/serve');

gulp.task('help', help);
gulp.task('default', ['help']);
gulp.task('bs', ['build', 'serve']);
