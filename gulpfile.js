var gulp = require('gulp');
var minifyCSS = require('gulp-csso');
var webpack = require('webpack-stream');

gulp.task('css',function(){
    return gulp.src('./src/css/*.css')
        .pipe(minifyCSS())
        .pipe(gulp.dest('./www/css/'));
});

gulp.task('webpack', function() {
    return gulp.src('./src/app.js')
        .pipe(webpack(require('./webpack.config.js')))
        .pipe(gulp.dest('./www/js/'));
});

gulp.task('default',['css','webpack']);