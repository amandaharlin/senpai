var gulp = require('gulp');
require('./build/scripts');
require('./build/index');
gulp.task('build', ['build-scripts', 'build-index']);
gulp.task('webpack',['build-webpack']);
