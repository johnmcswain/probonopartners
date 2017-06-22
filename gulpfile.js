var gulp = require('gulp');
var minifyCSS = require('gulp-csso');
var uglify = require('gulp-uglify');
var pump = require('pump');
var webpack = require('webpack-stream');

gulp.task('css',function(){
    return gulp.src('./src/css/*.css')
        .pipe(minifyCSS())
        .pipe(gulp.dest('./www/css/'));
});

gulp.task('webpack', function() {
    return gulp.src('./src/app.js')
        .pipe(webpack(require('./webpack.config.js')))
        .pipe(gulp.dest('./build/'));
});

gulp.task('compress', function (cb) {
    pump([
            gulp.src('./build/bundle.js'),
            uglify(),
            gulp.dest('./www/js/')
        ],
        cb
    );

});

gulp.task('build',['webpack']);
gulp.task('clean',['css','compress']);