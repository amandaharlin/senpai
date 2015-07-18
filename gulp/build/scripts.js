'use strict';
var gulp = require('gulp');
var debug = require('gulp-debug');
var webpack = require('webpack');
var config = require('../../webpack.config.js');

function buildScripts(callback) {
  //console.log('building scripts');

function buildWebpack(err, stats){
  if(err) {
     console.log('Error', err);
   }
   else {
     console.log(stats.toString());
   }
   callback();
}

webpack(config)
.run(buildWebpack);

  //return gulp.src('');
}

gulp.task('build-scripts', buildScripts);
