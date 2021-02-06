const gulp = require('gulp');
const concat = require('gulp-concat');

const libs = [];
//const libs = ['node_modules/swiper/swiper-bundle.min.js'];

// module.exports = function vendors(cb) {
//   return vendorsScripts.length
//     ? gulp.src(vendorsScripts)
//       .pipe(concat('libs.js'))
//       .pipe(gulp.dest('dist/static/js/'))
// };

const libsJS = () =>
    libs.length
        ? gulp
              .src(libs)
              .pipe(concat('libs.js'))
              .pipe(gulp.dest('src/assets/js/libs/'))
        : null;

module.exports = libsJS;
