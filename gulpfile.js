/* global Buffer */

var gulp = require('gulp'),
    through = require('through2'),
    bundler = require('gulp-amd-bundler');

// run init tasks
gulp.task('default', ['bundle']);

// bundle
gulp.task('bundle', function() {
  return gulp.src('src/angular2.js')
    .pipe(bundler({
      extname: ''
    }))
    .pipe(through.obj(function (file, enc, next) {
      var contents = file.contents.toString();
      contents = [
        contents,
        'require.processDefQueue && require.processDefQueue();'
      ].join('\n\n');
      file.contents = new Buffer(contents);
      this.push(file);
      next();
    }))
    .pipe(gulp.dest('./dist'));
});
