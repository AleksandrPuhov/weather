const gulp = require('gulp');

const faviconModule = () =>
    gulp
        .src('src/assets/favicon/**/*.*')
        .pipe(gulp.dest('dist/assets/favicon'));

module.exports = faviconModule;
