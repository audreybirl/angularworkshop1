
var gulp = require('gulp'),
    connect = require('gulp-connect'),
    proxyList = [
    '^/testendpoint/(.*)$ http://localhost:1337/$1 [P]',
    '^/groups/(.*)$ http://localhost:1337/$1 [P]'
    ],
    connect = require('gulp-connect'),
    modRewrite = require('connect-modrewrite');

gulp.task('default', function () {
  connect.server({
    root: 'app/',
    port: 8888
  });
});*/

gulp.task('default', function () {
  connect.server({
    root: 'app/',
    port: 8888,
    livereload: true,
    middleware: function () {
          return [
              modRewrite(proxyList)
          ];
      }
  });
});
