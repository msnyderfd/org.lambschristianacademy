"use strict";

const gulp = require('gulp');
const sass = require('gulp-sass');
const del = require('del');
const fileinclude = require('gulp-file-include');
 
function build(cb) {
  gulp.src(['_src/index.html', '_src/about.html'])
    .pipe(fileinclude({
      prefix: '@@',
      basepath: '@file'
    }))
    .pipe(gulp.dest('./_dist'));
  cb();
}

function clean(cb) {
  del(['./_dist/**']);
  cb();
}

function move(cb) {
  var res = [ '_src/stylesheets/**/*.css', '_src/scripts/**/*.js', '_src/res/**/*.*', '_src/content/**/*.*' ];
  gulp.src(res, { base: '_src' })
  .pipe(gulp.dest('_dist'));
  cb();
}

exports.default = gulp.series(clean, move, build);
exports.build = build;
exports.clean = clean;
exports.move = move;