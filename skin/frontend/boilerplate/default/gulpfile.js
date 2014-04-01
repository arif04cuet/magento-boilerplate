var gulp = require('gulp');

var less = require('gulp-less');
var minifycss = require('gulp-minify-css');

var jshint = require('gulp-jshint');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');


gulp.task('less', function () {
    gulp
        .src('less/style.less')
        .pipe(less({
            paths: ['less']
        }))
        // .pipe(minifycss())
        .pipe(gulp.dest('dist/css'));
});

gulp.task('lint', function () {
    gulp
        .src('js/script.js')
        .pipe(jshint())
        .pipe(jshint.reporter('default'));
});

gulp.task('js', function () {
    gulp
        .src([
            'bower_components/jquery/dist/jquery.min.js',
            'bower_components/bootstrap/dist/js/bootstrap.min.js',
            'bower_components/holderjs/holder.js',
            'bower_components/Selecter/jquery.fs.selecter.min.js',
            'js/script.js'
        ])
        .pipe(concat('script.js'))
        // .pipe(uglify())
        .pipe(gulp.dest('dist/js'));
});

gulp.task('default', ['less', 'js'], function () {

    gulp.watch('less/**/*.less', function () {
        gulp.run('less');
    });

    gulp.watch('js/**/*.js', function () {
        gulp.run('js');
    });
});
