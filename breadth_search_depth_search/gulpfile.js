var gulp = require('gulp');
var mocha = require('gulp-mocha');
var util = require('gulp-util');

/**
 * Gulp Tasks
 */

gulp.task('test', function () {
    return gulp.src(['test/**/*.js'], { read: false })
        .pipe(mocha({ reporter: 'spec' }))
        .on('error', util.log);
});

gulp.task('watch-test', function () {
    gulp.watch(['views/**', 'public/**','binary_search.js', 'routes/**', 'test/**'], ['test']);
});

// *** default task *** //
gulp.task('default', ['test', 'watch-test'], function(){});