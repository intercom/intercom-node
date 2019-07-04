var gulp = require('gulp');
var eslint = require('gulp-eslint');
var excludeGitignore = require('gulp-exclude-gitignore');
var mocha = require('gulp-mocha');
var istanbul = require('gulp-istanbul');
var plumber = require('gulp-plumber');
var babel = require('gulp-babel');

gulp.task('static', function () {
  return gulp
    .src('**/*.js')
    .pipe(excludeGitignore())
    .pipe(eslint())
    .pipe(eslint.format())
    .pipe(eslint.failAfterError());
});

gulp.task('pre-test', function () {
  return gulp
    .src('lib/**/*.js')
    .pipe(babel())
    .pipe(istanbul({ includeUntested: true }))
    .pipe(istanbul.hookRequire());
});

gulp.task(
  'test',
  gulp.series('pre-test', function () {
    return gulp
      .src('test/**/*.js')
      .pipe(plumber())
      .pipe(mocha({
        compilers: 'js:@babel/register',
        reporter: 'spec'
      }));
  })
);

gulp.task('babel', function () {
  return gulp
    .src('lib/**/*.js')
    .pipe(babel())
    .pipe(gulp.dest('dist'));
});

gulp.task('prepublish', gulp.series('babel'));
gulp.task('default', gulp.series('static', 'test'));
