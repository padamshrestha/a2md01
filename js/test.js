var gulp = require('gulp'),
    uglify = require('gulp-uglify')

    ;

gulp.task('default', function (){
    gulp.src('js/*.js')
        .pipe(uglify())
        .pipe(gulp.dest('minjs'))
    ;
});

gulp.task('styles', function (){
    console.log('styles done.');
});