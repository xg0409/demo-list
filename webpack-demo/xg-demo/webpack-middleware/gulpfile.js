var gulp = require('gulp');
var nodemon = require('nodemon');
var runSequence = require('run-sequence');
var gulpLoadPlugins = require('gulp-load-plugins');

var plugins = gulpLoadPlugins();

function onServerLog(log) {
  // console.log('11',plugins.util.colors)

}

gulp.task('start:server', function() {
  nodemon('-w server/controllers app.js').on('log', onServerLog);
});

gulp.task('server', function() {
  runSequence('start:server')
});
