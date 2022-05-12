var gulp = require ('gulp');                                   // llamar a gulp
var sass = requirte ('gulp-sass');                             // llamar desde gulp a sass 
var sourcemaps = require ('gulp-sourcemaps');                  // .map para relacionar sass con css
var browserSync = require ('browser-sync').create();           // el navegador se actualice con los últimos cambios que se van generando

gulp.task('default', gulp.series(), function () {});