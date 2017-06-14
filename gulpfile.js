var gulp = require('gulp');
var injectScripts = require('./index.js');


gulp.task('default', function(){
  return gulp.src('./test/src/*.html')
    .pipe(injectScripts())
    .pipe(gulp.dest('./test/dist'));
});
