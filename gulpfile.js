var gulp = require('gulp');
var mocha = require('gulp-mocha');
var istanbul = require('gulp-istanbul');
var isparta = require('isparta');
require('babel-core/register');

gulp.task('pre-test', function () {
  return gulp.src(['lib/**/*.js', '!lib/**/*-test.js'])
    .pipe(istanbul({instrumenter: isparta.Instrumenter}))
    .pipe(istanbul.hookRequire());
});

gulp.task('test', ['pre-test'], function () {
  return gulp.src(['./lib/**/*-test.js'])
    .pipe(mocha())
    .pipe(istanbul.writeReports())
    .pipe(istanbul.enforceThresholds({ thresholds: { global: 90 } }));
});
