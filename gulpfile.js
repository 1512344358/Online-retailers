//导入插件
const gulp = require('gulp');
const uglify = require('gulp-uglify');
const concat = require('gulp-concat');
const imagemin = require('gulp-imagemin');
const sass = require('gulp-sass');
const cssmin = require('gulp-cssmin');
const rename = require('gulp-rename');
//执行任务:压缩css
gulp.task('sass',()=>{
	gulp.src('./src/sass/*.scss')
	.pipe(sass())
	.pipe(cssmin())
	.pipe(rename({"suffix" : ".min"}))
	.pipe(gulp.dest('./dist/css'));
})
//压缩js
gulp.task('js',()=>{
	gulp.src('./src/js/*.js')
	.pipe(uglify())
	.pipe(rename({"suffix" : ".min"}))
	.pipe(gulp.dest('./dist/js'));
})
//压缩图片
gulp.task('img',()=>{
	gulp.src('./src/images/*.*')
	.pipe(imagemin())
	.pipe(rename({"suffix" : ".min"}))
	.pipe(gulp.dest('./dist/img'));
})
//监听
gulp.task('default',()=>{
	gulp.watch('./src/sass/*.scss',['sass']);
 })
