const gulp = require('gulp');

const fontsModule = () =>
    gulp.src('src/assets/fonts/**/*.*').pipe(gulp.dest('dist/assets/fonts'));

module.exports = fontsModule;
