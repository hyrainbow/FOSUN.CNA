//导入工具包 require('node_modules里对应模块')
var gulp = require('gulp'), //本地安装gulp所用到的地方
    less = require('gulp-less'),
    minifycss = require('gulp-imagemin'),
    uglify = require('gulp-uglify'),
    concat = require('gulp-concat'),
    minifycss = require('gulp-minify-css');
gulp.task('less',function(){
    gulp.src('./public/less/**/*.less')
        .pipe(less())
        .pipe(minifycss())
        .pipe(gulp.dest('./public/css'))
});

gulp.task('libs',function(){
    gulp.src('./public/js/*.js')
        .pipe(uglify())
        .pipe(concat('main.js'))
        .pipe(gulp.dest('./public/js/lib/'))       //将混淆后文件放入目标文件夹
})

gulp.task('task',['less','libs']);