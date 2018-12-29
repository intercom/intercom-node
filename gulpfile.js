var gulp = require('gulp');
var eslint = require('gulp-eslint');
var excludeGitignore = require('gulp-exclude-gitignore');
var mocha = require('gulp-mocha');
var istanbul = require('gulp-istanbul');
var babel = require('gulp-babel');

gulp.task('static', function runStatic() {
  return gulp.src('**/*.js')
    .pipe(excludeGitignore())
    .pipe(eslint())
    .pipe(eslint.format())
    .pipe(eslint.failAfterError());
});

gulp.task('pre-test', function preTest() {
  return gulp.src('lib/**/*.js')
    .pipe(babel({
      presets: ['@babel/env']
    }))
    .pipe(istanbul({includeUntested: true}))
    .pipe(istanbul.hookRequire());
});

gulp.task('run-tests', function runTests(done) {
  var mochaErr;
  gulp.src('test/**/*.js')
    .pipe(mocha({reporter: 'spec', require: ['@babel/register']}))
    .on('error', function (err) {
      mochaErr = err;
    })
    .on('end', function () {
      done(mochaErr);
    });
  done();
});

var test = gulp.series('pre-test', 'run-tests');


gulp.task('babel', function () {
  return gulp.src('lib/**/*.js')
    .pipe(babel())
    .pipe(gulp.dest('dist'));
});

gulp.task('prepublish', gulp.series('babel'));
gulp.task('default', gulp.series('static', test));
