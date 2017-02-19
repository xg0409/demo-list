var gulp = require('gulp');
var nodemon = require('nodemon');
var runSequence = require('run-sequence');
var gulpLoadPlugins = require('gulp-load-plugins');
var webpackConfigHandle = require('./webpack/config.handle.js');
var plugins = gulpLoadPlugins();
var webpackStream = require('webpack-stream');
var named = require('vinyl-named');

function onServerLog(log) {
  // console.log('11',plugins.util.colors)

}

function getEnvModules(args, iterator) {
  return args.modules ? args.modules.split(/\s+/).map(iterator) : null;
}

gulp.task('start:server', function() {
  // console.log('plugins', plugins.util.env.modules);
  nodemon('-w server/controllers -w client/ server/index.js').on('log', onServerLog);
});


gulp.task('env:all', function() {
  var modules = getEnvModules(plugins.util.env, function(module) {
    console.log('module', module);
    return module;
  }) || [];

  plugins.env({
    vars: {
      PORT: 12306,
      NODE_ENV: 'development',
      DEBUG: 'app:*,',
      DEBUG_COLORS: true,
      ENTRY_MODULES: JSON.stringify(modules)
    }
  });
});

gulp.task('env:prod', function() {
  plugins.env({
    vars: {
      NODE_ENV: 'production',
    }
  });
});
gulp.task('env:dev', function() {
  plugins.env({
    vars: {
      NODE_ENV: 'development',
    }
  });
});

gulp.task('webpack:prod', function() {
  var webpackProdConfig = webpackConfigHandle.getWebpackProdConfig();
  // var webpackProdConfig =require('./webpack/webpack.prod.config.js');
  console.log('webpackProdConfig11212',JSON.stringify(webpackProdConfig))
  return gulp.src([])
    .pipe(named())
    .pipe(plugins.plumber())
    .pipe(webpackStream(webpackProdConfig))
    .pipe(gulp.dest('./dest'));
});

gulp.task('build', function() {
  runSequence(
    'env:all',
    'env:prod',
    'webpack:prod'
  )
});

gulp.task('server', function() {
  runSequence(
    'env:all',
    'env:dev',
    'start:server'
  )
});
