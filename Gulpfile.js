var gulp = require('gulp');
var browserify = require('gulp-browserify');

gulp.task('scripts', function() {
  gulp.src('./app/browser.js').
    pipe(browserify({
      transform: ['reactify', 'es6ify']
    })).
    pipe(gulp.dest('./public/javascripts'))
});