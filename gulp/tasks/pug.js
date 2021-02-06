const gulp = require('gulp');
const pug = require('gulp-pug');

const pugModule = () =>
    gulp.src('src/pug/*.pug').pipe(pug()).pipe(gulp.dest('dist'));

module.exports = pugModule;
