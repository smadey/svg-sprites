var path = require('path');

var gulp = require('gulp');
var rename = require('gulp-rename');
var svgmin = require('gulp-svgmin');
var svgstore = require('gulp-svgstore');

gulp.task('build', function () {
  return gulp
    .src('src/*.svg')
    .pipe(svgmin())
    .pipe(svgstore())
    .pipe(rename('icons.svg'))
    .pipe(gulp.dest('dist'));
});
