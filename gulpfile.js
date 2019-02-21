//请求插件
var gulp = require('gulp'),
    uglify = require('gulp-uglify'),
    concat = require('gulp-concat'),
    rename = require('gulp-rename'),
    imagemin = require('gulp-imagemin'),
    cssmin = require('gulp-cssmin'),
    sass = require('gulp-sass');

gulp.task('js',function(){
    gulp.src('./src/js/*.js')
        .pipe(sass())
        .pipe(cssmin())
        .pipe(rename('index.min.js'))
        .pipe(gulp.dest('./dist/js'));
})

gulp.task('sass',function(){
    gulp.src('./src/sass/*.scss')
        .pipe(sass())
        .pipe(cssmin())
        .pipe(rename('index.min.sass'))
        .pipe(gulp.dest('./dist/css'));
})

gulp.task('minimg',function(){
    gulp.src('./src/image/*')
        .pipe(imagemin())
        .pipe(gulp.dest('./dist/image'));
})

gulp.task('default',function(){
    gulp.watch('./src/js/*.js',['js']);
    gulp.watch('./src/sass/*.scss',['sass']);
    gulp.watch('./src/image/*.',['minimg']);    
})