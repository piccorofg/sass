var gulp = require('gulp'); // llamar a gulp
var sass = require('gulp-sass'); // llamar desde gulp a sass 
var sourcemaps = require('gulp-sourcemaps'); // .map para relacionar sass con css
var browserSync = require('browser-sync').create(); // el navegador se actualice con los últimos cambios que se van generando

/*
** 
DEFINIR DONDE ESTÁN LOS ARCHIVOS SASS Y TRABAJAR CON LOS SOURCEMAP
DEFINIR LOS PUNTOS DE DESTINO EN LA CARPETA CSS 
*/

gulp.task('sass',  function(){
    return gulp.src('./sass/**/*sass')
    .pipe(sourcemaps.init())
    .pipe(sass( options, {}).on('error', sass.logError))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('./css'))
    .pipe(browserSync.stream());
});

/*
** 
SINCRONIZAR CON UN BROWSER 
CONTROL DE CAMBIOS CON GULP EN SASS
*/

gulp.task('serve', function () {
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });
    gulp.watch('./sass/**/*.sass', gulp.series('sass'));
});


/*
**  
 Ejecutar gulp desde terminal, serie tareas seguidas
*/
gulp.task('default', gulp.series('sass', 'serve'), function () {});


