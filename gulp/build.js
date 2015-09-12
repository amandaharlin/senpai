var gulp = require('gulp');
require('./build/scripts');
require('./build/partials');
require('./build/index');
gulp.task('build', ['build-scripts', 'build-docs-scripts-partials', 'build-index']);
gulp.task('webpack', ['build-webpack']);