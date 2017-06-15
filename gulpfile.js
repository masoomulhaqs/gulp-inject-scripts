var gulp = require('gulp');
var injectScripts = require('./index.js');

gulp.task('default', function(){
  return gulp.src('./demo/src/*.html')
    .pipe(injectScripts())
    .pipe(gulp.dest('./demo/dist'));
});
