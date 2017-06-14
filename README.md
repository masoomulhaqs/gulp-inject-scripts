# gulp-inject-scripts

> A gulp plugin to injects javascript under a script tag

* [Installation](#installation)
* [Usage](#usage)
* [Output](#output)

## Installation

Install using `npm`

```
$ npm install --save-dev gulp-inject-scripts
```

Or using `yarn`

```
$ yarn add --dev gulp-inject-scripts
```

## Usage

Gulp task example:

```javascript
var gulp = require('gulp');
var injectScripts = require('gulp-inject-scripts');

gulp.task('inject:script', function(){
  return gulp.src('./test/src/*.html')
    .pipe(injectScripts())
    .pipe(gulp.dest('./test/dist'));
});
```

HTML example:

```html
<!doctype html>
<html lang="en">
<head>
    <title>Gulp Inject Scripts</title>
<body>
    <div>Body</div>

    <script src="./test/src/valid-file.js"></script>
</body>
</html>
```

Note: Source path of `script` tag should be relative to `gulpfile.js`

## Output

```html
<!doctype html>
<html lang="en">
<head>
    <title>Gulp Inject Scripts</title>
<body>
    <div>Body</div>

    <script>
    // YOUR SCRIPT COMES HERE
    </script>
</body>
</html>
```
