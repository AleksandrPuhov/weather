const gulp = require('gulp');
const sass = require('gulp-sass');
sass.compiler = require('node-sass');
const sourcemaps = require('gulp-sourcemaps');
const argv = require('yargs').argv;
const gulpif = require('gulp-if');
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');

const stylesModule = () => {
    const plugins = [
        autoprefixer({
            overrideBrowserslist: ['last 2 version'],
            cascade: false,
        }),
    ];

    if (argv.prod) {
        plugins.push(cssnano());
    }

    return gulp
        .src('src/assets/styles/**/*.scss')
        .pipe(gulpif(!argv.prod, sourcemaps.init()))
        .pipe(sass().on('error', sass.logError))
        .pipe(postcss(plugins))
        .pipe(gulpif(!argv.prod, sourcemaps.write()))
        .pipe(gulp.dest('dist/assets/css/'));
};

module.exports = stylesModule;
