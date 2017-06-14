var through = require('through2');
var gutil = require('gulp-util');
var fs = require('fs');
var PluginError = gutil.PluginError;

var PLUGIN_NAME = 'gulp-inject-scripts';

// Exporting the plugin main function
module.exports = function() {

  var self = null;

  var CONST_PATTERN = /<script[\s\S]*?>[\s\S]*?<\/script>/gi;

  function throwError(msg) {
    self.emit('error', new PluginError(PLUGIN_NAME, msg));
  }

  function getSource(data) {

    var result = null;
    var group = data.match(/src\s*=\s*"(.+?)"/gi);

    if (group && group.length > 0) {
      result = group[0].split("=")[1].replace(/\s*['"](.*)['"]\s*/, '$1');
    };

    return result;

  }

  function getScript(src) {

    if (src && fs.existsSync(src)) {
      return '<script>\n' + fs.readFileSync(src) + '\n<\/script>';
    } else {
      return '<script>\n\/*** NO FILE FOUND ***\/\n<\/script>';
    }

  };

  function injectScript(file, enc, cb) {

    if (file.isNull()) {

      this.push(file);
      return cb(null, file);

    }

    if (file.isBuffer()) {

      var contents = String(file.contents);

      contents = contents.replace(new RegExp(CONST_PATTERN), function(match, parameters) {

        var src = getSource(match);
        return getScript(src);

      });

      file.contents = new Buffer(contents);
      this.push(file);

      return cb();

    }

    return cb(null, file);

  };

  return through.obj(injectScript);

};
