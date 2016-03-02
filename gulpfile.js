var gulp = require('gulp');
//var mocha = require('gulp-mocha');
//var exit = require('gulp-exit');
var jshint = require('gulp-jshint');
var stylish = require('jshint-stylish');
//var webpack = require('gulp-webpack');

//gulp.task('test', function() {
//  return gulp
//    .src('test/*.js')
//    .pipe(mocha())
//    .pipe(exit());
//});

gulp.task('lint', function () {
    return gulp
        .src(['src/**/*.js', './gulpfile.js'])
        .pipe(jshint())
        .pipe(jshint.reporter(stylish));
});

//gulp.task('webpack', function() {
//  return gulp
//    .src('app/js/client.js')
//    .pipe(webpack({
//      output: {
//        filename: 'bundle.js'
//      }
//    }))
//    .pipe(gulp.dest('build/'));
//});

//gulp.task('copy', function() {
//  return gulp
//    .src('app/**/*.html')
//    .pipe(gulp.dest('build/'));
//});
//
//gulp.task('watch:lint', function() {
//  gulp.watch(['app/**/*.js', 'models/**/*.js', 'routes/**/*.js', 'test/**/*.js', './gulpfile.js'], ['lint']);
//});
//
//gulp.task('watch:build', function() {
//  gulp.watch(['./app/**/*'], ['build']);
//});

//gulp.task('build', ['webpack', 'copy']);
//
//gulp.task('default', ['test'], function() {});
