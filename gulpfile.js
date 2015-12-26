var gulp = require('gulp'),
    bundler = require('gulp-amd-bundler');

// run init tasks
gulp.task('default', ['bundle']);

// bundle
gulp.task('bundle', function() {
  return gulp.src('src/angular2.js')
    .pipe(bundler({
      extname: ''
    }))
    .pipe(gulp.dest('./dist'));
});
