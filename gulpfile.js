var gulp = require('gulp');
var eslint = require('gulp-eslint');
var ts = require('gulp-typescript');
var sourcemaps = require('gulp-sourcemaps');
var excludeGitignore = require('gulp-exclude-gitignore');
var mocha = require('gulp-mocha');
var istanbul = require('gulp-istanbul');
var plumber = require('gulp-plumber');
var babel = require('gulp-babel');

gulp.task('compile_ts', () => {
  const tsProject = ts.createProject('tsconfig.json', {
    typescript: require('typescript')
  });
  const tsResult = gulp.src([
    'lib/*.ts',
    'lib/**/*.ts'
  ])
    .pipe(sourcemaps.init())
    .pipe(tsProject());

  return tsResult.js
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('./lib'));
});
gulp.task('static', function () {
  return gulp
    .src('**/*.js')
    .pipe(excludeGitignore())
    .pipe(eslint({fix: true}))
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
gulp.task('default', gulp.series('compile_ts', 'static', 'test'));
