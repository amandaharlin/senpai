'use strict';

var gulp = require('gulp');
var help = require('gulp-task-listing');

gulp.task('help', help);
gulp.task('default', ['help']);
