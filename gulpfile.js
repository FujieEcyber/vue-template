var gulp = require('gulp');

var webpack = require("webpack");
var webpackStream  = require("webpack-stream");
var webpackConfig = require("./webpack.config.js");

gulp.task("webpack", function () {
    return gulp.src('vue/main.js')
    .pipe(webpackStream(webpackConfig, webpack))
    .pipe(gulp.dest("./dist"))
});

gulp.task("build",['webpack'], function () {
    console.log('build complete');
});

gulp.task("default",['server'], function() {
    gulp.watch(["./vue/**/*.js", "./vue/**/*.vue"],["webpack"]);
});
